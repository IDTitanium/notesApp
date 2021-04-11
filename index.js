function getNoteId() {
  let noteObject = getExistingNotes();
  if (!noteObject) {
    return 1;
  }
  const keysArray = Object.keys(noteObject);
  const numberKeys = keysArray.map((key) => Number(key));
  console.log(numberKeys);
  let ret = Math.max(...numberKeys) + 1;
  return ret;
}
function getExistingNotes() {
  let notes = localStorage.getItem("notes");
  if (!notes) {
    return null;
  }
  return JSON.parse(notes);
}
