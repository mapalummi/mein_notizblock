let myTitles = ["Testing", "Exercise", "What"];
let myNotes = ["Test", "Sets", "This"];
let archiveNotesTitles = [];
let archiveNotes = [];
let trashNotesTitles = [];
let trashNotes = [];

function renderNotes() {
  noteFromLocalStorage();
  document.getElementById("note_content").innerHTML = "";

  for (let i = 0; i < myNotes.length; i++) {
    document.getElementById("note_content").innerHTML += getNoteTemplate(i);
  }
}

function renderArchive() {
  archiveFromLocalStorage();
  document.getElementById("archive_content").innerHTML = "";

  for (let iArchive = 0; iArchive < archiveNotes.length; iArchive++) {
    document.getElementById("archive_content").innerHTML +=
      getArchiveTemplate(iArchive);
  }
}

function renderTrashNotes() {
  trashFromLocalStorage();
  document.getElementById("trash_content").innerHTML = "";

  for (let iTrash = 0; iTrash < trashNotes.length; iTrash++) {
    document.getElementById("trash_content").innerHTML +=
      getTrashNoteTemplate(iTrash);
  }
}

function addNote() {
  let inputTitleValue = document.getElementById("input_title").value;
  let inputTextValue = document.getElementById("input_text").value;

  if (inputTitleValue == "") {
    alert("Titel fehlt");
  } else if (inputTextValue == "") {
    alert("Text fehlt");
  } else {
    myTitles.push(inputTitleValue);
    myNotes.push(inputTextValue);

    noteToLocalStorage();
    renderNotes();

    document.getElementById("input_title").value = "";
    document.getElementById("input_text").value = "";
  }
}

function noteToLocalStorage() {
  localStorage.setItem("myTitles", JSON.stringify(myTitles));
  localStorage.setItem("myNotes", JSON.stringify(myNotes));
}

function noteFromLocalStorage() {
  let newTitles = JSON.parse(localStorage.getItem("myTitles"));
  let newNotes = JSON.parse(localStorage.getItem("myNotes"));

  if (newTitles != null && newNotes != null) {
    myTitles = newTitles;
    myNotes = newNotes;
  }
}

function archiveToLocalStorage() {
  localStorage.setItem(
    "archiveNotesTitles",
    JSON.stringify(archiveNotesTitles)
  );
  localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
}

function archiveFromLocalStorage() {
  let newArchiveTitles = JSON.parse(localStorage.getItem("archiveNotesTitles"));
  let newArchiveNotes = JSON.parse(localStorage.getItem("archiveNotes"));

  if (newArchiveTitles != null && newArchiveNotes != null) {
    archiveNotesTitles = newArchiveTitles;
    archiveNotes = newArchiveNotes;
  }
}

function trashToLocalStorage() {
  localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function trashFromLocalStorage() {
  let newTrashTitles = JSON.parse(localStorage.getItem("trashNotesTitles"));
  let newTrashNotes = JSON.parse(localStorage.getItem("trashNotes"));

  if (newTrashTitles != null && newTrashNotes != null) {
    trashNotesTitles = newTrashTitles;
    trashNotes = newTrashNotes;
  }
}

function noteToTrash(i) {
  let trashNote = myNotes.splice(i, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = myTitles.splice(i, 1);
  trashNotesTitles.push(trashNoteTitle[0]);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function noteToArchive(i) {
  let archiveNote = myNotes.splice(i, 1);
  archiveNotes.push(archiveNote[0]);
  let archiveNoteTitle = myTitles.splice(i, 1);
  archiveNotesTitles.push(archiveNoteTitle[0]);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function archiveNoteToTrash(iArchive) {
  let archiveNote = archiveNotes.splice(iArchive, 1);
  trashNotes.push(archiveNote[0]);
  let archiveNoteTitle = archiveNotesTitles.splice(iArchive, 1);
  trashNotesTitles.push(archiveNoteTitle[0]);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function archiveNoteRestore(iArchive) {
  let restoreArchiveNote = archiveNotes.splice(iArchive, 1);
  myNotes.push(restoreArchiveNote[0]);
  let restoreArchiveTitle = archiveNotesTitles.splice(iArchive, 1);
  myTitles.push(restoreArchiveTitle[0]);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function deletedNoteRestore(iTrash) {
  let restoreNote = trashNotes.splice(iTrash, 1);
  archiveNotes.push(restoreNote[0]);
  let restoreTitle = trashNotesTitles.splice(iTrash, 1);
  archiveNotesTitles.push(restoreTitle[0]);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function deleteNote(iTrash) {
  trashNotes.splice(iTrash, 1);
  trashNotesTitles.splice(iTrash, 1);

  noteToLocalStorage();
  renderNotes();
  archiveToLocalStorage();
  renderArchive();
  trashToLocalStorage();
  renderTrashNotes();
}

function addOverlay() {
  document.getElementById("overlay").classList.remove("d_none");
}

function removeOverlay() {
  document.getElementById("overlay").classList.add("d_none");
}