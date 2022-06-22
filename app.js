// http://localhost:5500/

const gameState = {
  active: true,
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

//   ------------------------------------------------------------

function checkRow(gameboard, rownum) {
  let rowchecker = gameboard[rownum];
  return rowchecker;
}

function checkColumn(gameboard, colnum) {
  let columnchecker = [];
  for (let i = 0; i < gameboard.length; i++) {
    columnchecker.push(gameboard[i][colnum]);
  }
  return columnchecker;
}

function checkDiagonal(diagone) {
  diagonalchecker = [];
  for (let i = 0; i < diagone.length; i++) {
    diagonalchecker.push(diagone[i][i]);
  }
  return diagonalchecker;
}

function checkDiagonal2(diagtwo) {
  diagonalchecker2 = [];
  for (let i = 0; i < diagtwo.length; i++) {
    diagonalchecker2.push(diagtwo[i][(i * 2 + 5) % 3]);
  }
  return diagonalchecker2;
}

// ---------------------------------------

function checkforwin(test) {
  for (let i = 0; i < test.length; i++) {
    posttest = test.join("");
    if (posttest === "xxx" || posttest === "ooo") {
      gameState.active = false;
      return true;
    } else {
      return false;
    }
  }
}

// ------------------------------------------

function tictacoevalidator(checker) {
  let currdiag = checkDiagonal(checker);
  let wincheck3 = checkforwin(currdiag);
  if (!wincheck3) {
  }
  let currdiag2 = checkDiagonal2(checker);
  let wincheck4 = checkforwin(currdiag2);
  if (!wincheck4) {
  }
  for (let i = 0; i < checker.length; i++) {
    let currRow = checkRow(checker, i);
    let wincheck = checkforwin(currRow);
    if (!wincheck) {
    }
    let currcol = checkColumn(checker, i);
    let wincheck2 = checkforwin(currcol);
    if (!wincheck2) {
    }
  }
  if (!gameState.active) {
    console.log("Game Over!");
  }

  // let fullboard = gameState.board.flat()

  // if (!fullboard.includes(null)){
  //     console.log('The Board is Full!  Press clear to reset the board!')
  // }
}

tictacoevalidator(gameState.board);

// -------------------------------------------

let board = document.getElementById("gametable");
let clear = document.getElementById("clearbutton");
let boardcounter = 0;


board.addEventListener('click', (event) => {
  if (boardcounter % 2 === 0) {
    event.target.innerText = gameState.players[0]
  }
  if (boardcounter % 2 === 1) {
    event.target.innerText = gameState.players[1]
  }
  boardcounter += 1
})

clear.addEventListener("click", (event) => {
  let cellOne = document.getElementById('cellOne')
  let cellTwo = document.getElementById('cellTwo')
  let cellThree = document.getElementById('cellThree')
  let cellFour = document.getElementById('cellFour')
  let cellFive = document.getElementById('cellFive')
  let cellSix = document.getElementById('cellSix')
  let cellSeven = document.getElementById('cellSeven')
  let cellEight = document.getElementById('cellEight')
  let cellNine = document.getElementById('cellNine')
  event.target.matches('.clearbutton');
  cellOne.innerText = null;
  cellTwo.innerText = null;
  cellThree.innerText = null;
  cellFour.innerText = null;
  cellFive.innerText = null;
  cellSix.innerText = null;
  cellSeven.innerText = null;
  cellEight.innerText = null;
  cellNine.innerText = null;
})
