const cells = document.querySelectorAll('[data-cell]');
const statusMessage = document.getElementById('statusMessage');

// Get player's symbol from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const playerSymbol = urlParams.get('symbol') || 'X'; // Default to 'X' if not provided
const aiSymbol = playerSymbol === 'X' ? 'O' : 'X';  // AI gets the opposite symbol

let isPlayerTurn = true;

// Start Game
function startGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove(playerSymbol, aiSymbol);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  statusMessage.textContent = "Your Turn";
  isPlayerTurn = true;
}

// Handle Player Click
function handleClick(e) {
  const cell = e.target;
  placeMark(cell, playerSymbol);
  if (checkWin(playerSymbol)) {
    endGame(false, playerSymbol);
  } else if (isDraw()) {
    endGame(true);
  } else {
    isPlayerTurn = false;
    statusMessage.textContent = "AI's Turn";
    setTimeout(aiMove, 500); // Pause briefly for AI move
  }
}

// AI Move
function aiMove() {
  const emptyCells = [...cells].filter(cell => cell.textContent === '');
  if (emptyCells.length === 0) return;
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  placeMark(randomCell, aiSymbol);
  if (checkWin(aiSymbol)) {
    endGame(false, aiSymbol);
  } else if (isDraw()) {
    endGame(true);
  } else {
    isPlayerTurn = true;
    statusMessage.textContent = "Your Turn";
  }
}

// Place Symbol in Cell
function placeMark(cell, symbol) {
  cell.textContent = symbol;
}

// Check for Win
function checkWin(symbol) {
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => cells[index].textContent === symbol);
  });
}

// Check for Draw
function isDraw() {
  return [...cells].every(cell => cell.textContent === playerSymbol || cell.textContent === aiSymbol);
}

// End Game
function endGame(draw, winner) {
  if (draw) {
    statusMessage.textContent = "It's a Draw!";
  } else {
    statusMessage.textContent = `${winner} Wins!`;
  }
  cells.forEach(cell => cell.removeEventListener('click', handleClick));
}

startGame();