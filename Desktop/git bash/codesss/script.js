const questions = {
  DSA: [
    "Explain longest palindromic substring.",
    "What is DFS vs BFS?",
    "Solve number of islands."
  ],
  HR: [
    "Tell me about yourself.",
    "Why should we hire you?",
    "Describe a challenge you solved."
  ],
  SQL: [
    "What is JOIN?",
    "Difference between WHERE and HAVING?",
    "Write query for second highest salary."
  ]
};

function generateQuestion() {
  const category = document.getElementById("category").value;
  const random = questions[category][Math.floor(Math.random() * questions[category].length)];
  document.getElementById("questionBox").innerText = random;
}

function saveAnswer() {
  const answer = document.getElementById("answerBox").value;
  let saved = JSON.parse(localStorage.getItem("answers")) || [];
  saved.push(answer);
  localStorage.setItem("answers", JSON.stringify(saved));
  displayAnswers();
}

function displayAnswers() {
  let saved = JSON.parse(localStorage.getItem("answers")) || [];
  document.getElementById("savedAnswers").innerHTML =
    "<h3>Saved Answers</h3>" + saved.map(a => `<p>${a}</p>`).join("");
}

displayAnswers();