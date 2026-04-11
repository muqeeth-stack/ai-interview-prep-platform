function generateColor() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
  document.getElementById("colorCode").innerText = randomColor;
}

function copyColor() {
  const text = document.getElementById("colorCode").innerText;
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}