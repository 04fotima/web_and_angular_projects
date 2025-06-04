const wordsToGuess = ["APPLE", "BANAN", "GRAPE", "LEMON", "PEACH", "PLUMN", "SPOON", "OVERT"];
let wordToGuess = ""; 
let currentGuess = []; 
let guesses = [];
const maxAttempts = 6; 
const cubes = document.querySelectorAll('.cube'); 
const messageElement = document.getElementById('message'); 

const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsToGuess.length);
    wordToGuess = wordsToGuess[randomIndex];
};

const resetGame = () => {
    currentGuess = [];
    guesses = [];
    cubes.forEach(cube => {
        cube.textContent = '';
        cube.style.backgroundColor = '#ccc'; 
    });
    selectRandomWord(); 
    messageElement.textContent = ''; 
    alert("Game has been reset. You can start a new game!");
};

selectRandomWord();

const goBack = () => {
    if (currentGuess.length > 0) {
        currentGuess.pop();
        const currentGuessIndex = guesses.length * 5 + currentGuess.length;
        cubes[currentGuessIndex].textContent = ''; 
        messageElement.textContent = ''; 
    }
};

document.getElementById('backButton').addEventListener('click', goBack);

document.getElementById('submitGuess').addEventListener('click', () => {
    if (currentGuess.length < 5) {
        messageElement.textContent = "IT IS TOO SHORT"; 
        return;
    }

    const guessWord = currentGuess.join('').toUpperCase();

    if (!wordsToGuess.includes(guessWord)) {
        messageElement.textContent = "IT IS FALSE"; 
        currentGuess = []; 
        for (let i = 0; i < 5; i++) {
            cubes[(guesses.length * 5) + i].textContent = ''; 
        }
        return;
    }

    guesses.push(guessWord);
    checkGuess(guesses[guesses.length - 1]);
    
    currentGuess = []; 
    messageElement.textContent = ''; 
    
    if (guesses.length >= maxAttempts) {
        alert(`Game Over! The word was: ${wordToGuess}`);
        resetGame(); 
    }
});

const checkGuess = (guess) => {
    const letterUsage = {};
    for (const letter of wordToGuess) {
        letterUsage[letter] = (letterUsage[letter] || 0) + 1;
    }

    for (let i = 0; i < 5; i++) {
        const letter = guess[i];
        const cube = cubes[(guesses.length - 1) * 5 + i];

        if (letter === wordToGuess[i]) {
            cube.style.backgroundColor = 'green'; 
            letterUsage[letter]--; 
        } else if (wordToGuess.includes(letter) && letterUsage[letter] > 0) {
            cube.style.backgroundColor = 'yellow'; 
            letterUsage[letter]--; 
        } else {
            cube.style.backgroundColor = 'gray'; 
        }

        cube.textContent = letter; 
    }
};

// Function to handle letter input from keyboard
const handleKeyPress = (letter) => {
    if (currentGuess.length < 5) {
        currentGuess.push(letter);
        cubes[guesses.length * 5 + currentGuess.length - 1].textContent = letter; 
        messageElement.textContent = ''; 
    }
};

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter)) {
        handleKeyPress(letter);
    }
});

// Event listener for button input
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const letter = key.textContent.toUpperCase();
        handleKeyPress(letter);
    });
});

// Event listener for resetting the game
document.getElementById('resetGame').addEventListener('click', resetGame);
