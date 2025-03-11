//Funktioniert:
function getNoteTemplate(i){
    return `<div class="note"><p><b>${myTitles[i]}</b><br><i>${myNotes[i]}</p><a onclick="noteToTrash(${i})" href="#">Papierkorb</a><a onclick="noteToArchive(${i})" href="#">archivate</a></div>`;
}



function getArchiveTemplate(iArchive){
    return `<div class="archive_note"><p><b>${archiveNotesTitles[iArchive]}</b><br><i>${archiveNotes[iArchive]}</p><a onclick="archiveNoteToTrash(${iArchive})" href="#">Papierkorb</a><a onclick="archiveNoteRestore(${iArchive})" href="#">restore</a></div>`;
}


//Funktioniert:
function getTrashNoteTemplate(iTrash){
    return `<div class="del_note"><p>${trashNotesTitles[iTrash]}<br>${trashNotes[iTrash]}</p><a onclick="deleteNote(${iTrash})" href="#">Delete</a><a onclick="deletedNoteRestore(${iTrash})" href="#">archivate</a></div>`;
}