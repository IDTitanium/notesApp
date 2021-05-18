function getNoteId() {
    let noteObject = getExistingNotes()
    if(!noteObject){
        return 1
    }
    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key)=>Number(key))
    console.log(numberKeys)
    return Math.max( ...numberKeys) + 1 
}
    
function getExistingNotes() {
    let notes = localStorage.getItem('notes')
    if(notes){
        //return null (this part wasn't needed)
    }
    return JSON.parse(notes)
}