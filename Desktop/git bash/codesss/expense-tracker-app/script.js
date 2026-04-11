let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const desc = document.getElementById("desc").value;
  const amount = document.getElementById("amount").value;

  if (!desc || !amount) return;

  expenses.push({ desc, amount: Number(amount) });
  localStorage.setItem("expenses", JSON.stringify(expenses));

  display();
}

function display() {
  const list = document.getElementById("list");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";
  let total = 0;

  expenses.forEach((e, i) => {
    total += e.amount;
    list.innerHTML += `<li>${e.desc} - ₹${e.amount} 
    <button onclick="deleteExpense(${i})">X</button></li>`;
  });

  totalEl.innerText = total;
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  display();
}

display();