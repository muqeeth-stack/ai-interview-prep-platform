const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Do it now, sometimes later becomes never.",
  "Dream big and dare to fail."
];

function newQuote() {
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = random;
}