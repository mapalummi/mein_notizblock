let myTitles = ['Testing', 'Exercise', 'What'];
let myNotes = ['Test', 'Sets', 'this'];

let archiveNotesTitles = [];
let archiveNotes = [];

let trashNotesTitles = [];
let trashNotes = [];



//Funktioniert:
function renderNotes(){
    document.getElementById('note_content').innerHTML = "";

    for (let i = 0; i < myNotes.length; i++) {
        document.getElementById('note_content').innerHTML += getNoteTemplate(i);
    }
}




function renderArchive(){
    document.getElementById('archive_content').innerHTML = "";

    for (let iArchive = 0; iArchive < archiveNotes.length; iArchive++) {
        document.getElementById('archive_content').innerHTML += getArchiveTemplate(iArchive);
    }
}




//Funktioniert:
function renderTrashNotes(){
    document.getElementById('trash_content').innerHTML = "";

    for (let iTrash = 0; iTrash < trashNotes.length; iTrash++) {
        document.getElementById('trash_content').innerHTML += getTrashNoteTemplate(iTrash);
    }
}


//Funktioniert:
function addNote(){
    let inputTitleValue = document.getElementById('input_title').value;
    let inputTextValue = document.getElementById('input_text').value;

    if (inputTitleValue == "") {
        alert("Titel fehlt")
    } else if (inputTextValue == "") {
        alert("Text fehlt")
    } 
    else{

        myTitles.push(inputTitleValue);
        myNotes.push(inputTextValue);
    
        renderNotes();
    
        document.getElementById('input_title').value = "";
        document.getElementById('input_text').value = "";

    }

}






//Funktioniert:
function noteToTrash(i){
    let trashNote = myNotes.splice(i, 1);
    trashNotes.push(trashNote[0]);

    let trashNoteTitle = myTitles.splice(i, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}



function noteToArchive(i){
    let archiveNote = myNotes.splice(i, 1);
    archiveNotes.push(archiveNote[0]);

    let archiveNoteTitle = myTitles.splice(i, 1);
    archiveNotesTitles.push(archiveNoteTitle[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}



//Anpassen!!!
function archiveNoteToTrash(iArchive){
    let archiveNote = archiveNotes.splice(iArchive, 1);
    trashNotes.push(archiveNote[0]);

    let archiveNoteTitle = archiveNotesTitles.splice(iArchive, 1);
    trashNotesTitles.push(archiveNoteTitle[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}



// Anpassen!!
function archiveNoteRestore(iArchive){
    let restoreArchiveNote = archiveNotes.splice(iArchive, 1);
    myNotes.push(restoreArchiveNote[0]);

    let restoreArchiveTitle = archiveNotesTitles.splice(iArchive, 1);
    myTitles.push(restoreArchiveTitle[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}



//Anpassen!!!!
function deletedNoteRestore(iTrash){
    let restoreNote = trashNotes.splice(iTrash, 1);
    archiveNotes.push(restoreNote[0]);

    let restoreTitle = trashNotesTitles.splice(iTrash, 1);
    archiveNotesTitles.push(restoreTitle[0]);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}


//Funktioniert:
function deleteNote(iTrash) {
    trashNotes.splice(iTrash, 1);
    trashNotesTitles.splice(iTrash, 1);

    renderNotes();
    renderArchive();
    renderTrashNotes();
}