const notes = ['A', 'S', 'D', 'F', 'G'];
let currentNote = '';
let score = 0;

function getRandomNote() {
    return notes[Math.floor(Math.random() * notes.length)];
}

function displayNote() {
    currentNote = getRandomNote();
    document.getElementById('note').textContent = currentNote;
}

function updateScore() {
    document.getElementById('score').textContent = `Счёт: ${score}`;
}

document.addEventListener('keydown', (event) => {
    if (event.key.toUpperCase() === currentNote) {
        score++;
        updateScore();
        displayNote();
    }
});

displayNote();
