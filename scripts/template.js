//Funktioniert:
function getNoteTemplate(i) {
  return `<div class="note">
            <p><b>${myTitles[i]}</b><br><i>${myNotes[i]}</p>
            <div class="btn_icons">
            <a onclick="noteToTrash(${i})" href="#"><img src="./assets/icons/icons8-müll-löschen.png" alt=""></a>
            <a onclick="noteToArchive(${i})" href="#"><img src="./assets/icons/icons8-lesezeichen.png" alt=""></a>
            </div>
          </div>`;
}

function getArchiveTemplate(iArchive) {
  return `<div class="archive_note">
            <p><b>${archiveNotesTitles[iArchive]}</b><br><i>${archiveNotes[iArchive]}</p>
            <div class="btn_icons">
            <a onclick="archiveNoteToTrash(${iArchive})" href="#"><img src="./assets/icons/icons8-müll-löschen.png" alt=""></a>
            <a onclick="archiveNoteRestore(${iArchive})" href="#"><img src="assets/icons/icons8-lesezeichen-löschen.png" alt=""></a>
            </div>
          </div>`;
}

//Funktioniert:
function getTrashNoteTemplate(iTrash) {
  return `<div class="del_note">
            <p><b>${trashNotesTitles[iTrash]}</b><br><br>${trashNotes[iTrash]}</p>
            <div class="btn_icons">
            <a onclick="deleteNote(${iTrash})" href="#"><img src="./assets/icons/icons8-unwiederuflich-löschen.png" alt=""></a>
            <a onclick="deletedNoteRestore(${iTrash})" href="#"><img src="./assets/icons/icons8-lesezeichen-hinzufügen.png" alt=""></a>
            </div>
          </div>`;
}
