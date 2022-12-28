//DOM load event
window.addEventListener("DOMContentLoaded", () => {

  //Set speech recognition fallback
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition(),
  notes = document.querySelector('.notes-list'),
  saveBtn = document.querySelector('.btn-save'),
  createNote = (transcript, newNote = true) => {
    //Create list item element
    const note = document.createElement('li');

    //Add attributes to note
    note.textContent = transcript;
    note.classList.add('note');
    note.setAttribute('contenteditable', '');

    //Add note to notes list
    notes.appendChild(note);

    //Check save button class
    if (newNote && !saveBtn.classList.contains('unsaved')) saveBtn.classList.add('unsaved');
  },
  saveNotes = () => {
    //Get notes
    const noteList = document.querySelectorAll('.note');

    if (noteList.length > 0) {
      //Store notes in local storage
      localStorage.setItem('notes', Array.from(noteList).map(note => note.textContent).join(', '));
    } else {
      //Delete notes entry from local storage
      if (localStorage.getItem('notes') !== null) localStorage.removeItem('notes');
    }

    //Check save button class
    if (saveBtn.classList.contains('unsaved')) saveBtn.classList.remove('unsaved');
  },
  loadNotes = () => {
    //Check if notes exist in local storage
    if (localStorage.getItem('notes') !== null) {
      //Get notes from local storage
      const noteList = localStorage.getItem('notes').split(', ');

      //Display notes
      noteList.forEach(note => createNote(note, false));
    }
  },
  checkNoteLength = e => {
    //Check if note should be deleted
    if (e.target.textContent.length === 0) e.target.remove();

    //Check save button class
    if (!saveBtn.classList.contains('unsaved')) saveBtn.classList.add('unsaved');
  };

  notes.addEventListener('keyup', e => checkNoteLength(e));

  saveBtn.addEventListener('click', () => saveNotes());

  recognition.addEventListener('result', e => createNote(e.results[0][0].transcript));

  recognition.addEventListener('end', recognition.start);

  recognition.start();

  loadNotes();
});