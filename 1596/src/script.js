const notesWrapper = document.getElementById("notes-wrapper");
const title = document.getElementById("title");
const content = document.getElementById("content");
const error = document.getElementById("form-error");

let notesData = [];

const createNote = (uid, title, text, date) => {
  const note = document.createElement("div");
  note.className = "note";
  note.id = uid;
  note.innerHTML = `
    <div class="note-title">${title}</div>
    <div class="note-controls">
      <button class="note-edit" onclick="editNote(${uid})">
        Edit
      </button>
      <button class="note-save" style="display:none" onclick="saveNote(${uid})">
        Save
      </button>
      <button class="note-delete" onclick="deleteNote(${uid})">
        Delete
      </button>
    </div>
    <div class="note-text">${text}</div>
    <div class="note-date">${date}</div>
  `;

  notesWrapper.insertBefore(note, notesWrapper.firstChild);
};

const addNote = () => {
  if (title.value.trim().length == 0 && content.value.trim().length == 0) {
    error.innerHTML = "Note cannot be empty";
    return;
  }

  const uid = new Date().getTime().toString();

  const noteObj = {
    uid: uid,
    title: title.value,
    text: content.value,
    date: new Date().toLocaleDateString()
  };

  notesData.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notesData));
  
  createNote(noteObj.uid, noteObj.title, noteObj.text, noteObj.date);

  error.innerText = "";
  content.value = "";
  title.value = "";
};

const editNote = (uid) => {
  const note = document.getElementById(uid);

  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  noteTitle.contentEditable = "true";
  noteText.contentEditable = "true";
  noteEdit.style.display = "none";
  noteSave.style.display = "block";
  noteText.focus();
};

const saveNote = (uid) => {
  const note = document.getElementById(uid);

  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  if (
    noteTitle.innerText.trim().length == 0 &&
    noteText.value.trim().length == 0
  ) {
    error.innerHTML = "Note cannot be empty";
    return;
  }

  notesData.forEach((note) => {
    if (note.uid == uid) {
      note.title = noteTitle.innerText;
      note.text = noteText.innerText;
    }
  });

  localStorage.setItem("notes", JSON.stringify(notesData));

  noteTitle.contentEditable = "false";
  noteText.contentEditable = "false";
  noteEdit.style.display = "block";
  noteSave.style.display = "none";
  error.innerText = "";
};

const deleteNote = (uid) => {
  let confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) {
    return;
  }

  const note = document.getElementById(uid);
  note.parentNode.removeChild(note);
  notesData = notesData.filter((note) => {
    return note.uid != uid;
  });
  localStorage.setItem("notes", JSON.stringify(notesData));
};

window.addEventListener("load", () => {
  notesData = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  notesData.forEach((note) => {
    createNote(note.uid, note.title, note.text, note.date);
  });
});
