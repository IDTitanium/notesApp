function getnoteId() {
	let noteStorage = getExistingNotes();
	if (!noteStorage) {
		return 1;
	}

	const keysArray = Object.keys(noteStorage);
	const numberKeys = keysArray.map((key) => Number(key));
	return Math.max(...numberKeys) + 1;
}

function getExistingNotes() {
	var note = localStorage.getItem("notes");
	if (!note) {
		return null;
	}
	return JSON.parse(note);
}
