const X_CLASS = 'x'
const CIRCULE_CLASS = 'o'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]');
let circuleTurn 
let winningMessageText = document.querySelector('[data-winning-message-text]')
let winningMessageElem = document.getElementById('winningMessage')
restartBtn = document.getElementById('restartBtn')

startGame();
restartBtn.addEventListener('click', startGame)

function startGame() {
cellElements.forEach (cell => {
	cell.classList.remove(X_CLASS)
	cell.classList.remove(CIRCULE_CLASS)
	cell.addEventListener('click', handleClick, {once: true})
});
winningMessageElem.classList.remove('show')
}

function handleClick(e) {
const cell = e.target;
const currentClass = circuleTurn ? CIRCULE_CLASS : X_CLASS;
placeMark(cell, currentClass);
if(checkWin(currentClass)) {
 endGame(false)
} else if (isDraw()){
	endGame(true)
}
swapTurns()
}

function endGame (draw) {
	if(draw) {
		winningMessageText.innerText = 'Ничья!'
	} else {
		winningMessageText.innerText = `${circuleTurn ? "Нолики " : "Крестики "} выигрывают!`
	}
	winningMessageElem.classList.add('show') 
}
function isDraw() {
	return [...cellElements].every(cell => {
		return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCULE_CLASS) 
	})
}
function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}
function swapTurns() {
	circuleTurn = !circuleTurn
}
function checkWin(currentClass) {
	return WINNING_COMBINATIONS.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentClass)
		})
	})
}
