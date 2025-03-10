let myTitles = ['Testing', 'Exercise'];
let myNotes = ['Test', 'Sets'];

let trashNotesTitles = [];
let trashNotes = [];


function renderNotes(){
    document.getElementById('note_content').innerHTML = "";

    for (let i = 0; i < myNotes.length; i++) {
        document.getElementById('note_content').innerHTML += getNoteTemplate(i);
    }
}

function renderTrashNotes(){
    document.getElementById('trash_content').innerHTML = "";

    for (let iTrash = 0; iTrash < trashNotes.length; iTrash++) {
        document.getElementById('trash_content').innerHTML += getTrashNoteTemplate(iTrash);
    }
}


//Funktioniert!
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


function noteToTrash(i){
    let trashNote = myNotes.splice(i, 1);
    trashNotes.push(trashNote[0]);

    let trashNoteTitle = myTitles.splice(i, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    renderNotes();
    renderTrashNotes();
}