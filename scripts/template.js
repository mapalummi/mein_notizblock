
function getNoteTemplate(i){
    return `<div class="note"><p><b>${myTitles[i]}</b> <br> <i>${myNotes[i]}</p><a onclick="noteToTrash(${i})" href="">delete</a></div>`;
}

function getTrashNoteTemplate(iTrash){
    return `<div><p>${trashNotesTitles[iTrash]} <br> ${trashNotes[iTrash]}</p></div>`;
}