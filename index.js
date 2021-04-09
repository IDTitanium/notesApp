var textElement = document.getElementById("note")

function saveNote() {
    if (textElement.value = "") {
        return alert('text is empty!')
    }
    const id = getNoteId()
    let noteObject = gtExistingNOtes()
    if (!noteObject) {
        noteObject = {}
    }
    noteObject[id] = textElement.value
    localStorage.setItem('notes', JSON.stringify(noteObject))
    alert('Note Saved!')
}

function getNotes() {
    let notes = getExistingNotes()
    let notesArray = Object.values(notes)
    let orderedList = document.getElementById('notes-list')
    notesArray.forEach(note => {
        let listItem = document.createElement('li')
        listItem.innerHTML = note
        orderedList.appendChild(listItm)
    })
}