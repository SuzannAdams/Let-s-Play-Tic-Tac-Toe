//create a block grid that is 3 by 3
//to create gameboard, referenced: https://www.youtube.com/watch?v=P2TcQ3h0ipQ
//create const for two players, const for the board, const for winning combinations
// const player1 = 'X';
// const player2 = 'O';
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];
//give the cells a variable to make easier to retrieve
const square = document.querySelectorAll('.cell');
// console.log(square);

//1st make an eventlistener
function clickFn(event) {
  console.log(event);
}
//make a loop that targets the button clicked and connects it to the cell
//Jared said append child to the click function to connect to box
for (let i = 0; i < square.length; i++) {
  square[i].addEventListener('click', clickFn);
  console.log(square[i]);
  square.append.on('click', clickFn);
}

const X = 'playerX';
const O = 'playerO';
//make a function that allows the players to take one turn each
function changePlayer(X, O) {
  if ((X, clickFn) || (O, clickFn))
    return Array.from(document.getElementsByClassName(square));
  else return square.removeEventListener;
}

//make a "for loop" for the winCombo for each player
function checkWinCombos() {}

//per Jared, let current player, create a function that changes it from player one to two.  Or create an array for x and for o. Need a function to help me change players. Need a function to check winCombos, then call another function then change player.(function calling another function)
//if else for current player, track it with an array or object
//ref. to target cells and add eventlisteners
//const board = () => Array.from(document.getElementsByClassName(square));

const enableListener = () =>
  board().forEach(square => square.addEventListener('click', clickFn));
const disableListener = () =>
  board().forEach(square => square.removeEventListener('click', clickFn));
//enableListeners();

//make a function that stops a player after each turn then have computer check for a winCombo
//function 3inRow

//create a choice of two buttons per grid
//the buttons should be either: X with orange background or O with a green background
//two players needed to play with the option of playing against the computer
//endgame message "You win!" or "Tie, play again."
