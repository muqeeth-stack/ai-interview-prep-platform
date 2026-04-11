let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
  const input = document.getElementById("noteInput");
  if (!input.value) return;

  notes.push(input.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    container.innerHTML += `
      <div class="note">
        ${note}
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

displayNotes();