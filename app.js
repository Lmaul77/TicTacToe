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

// // ---------------------------------------

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

// // ------------------------------------------

function tictactoevalidator(checker) {
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
    gameState.active = true;
  }

  let fullboard = gameState.board.flat()

  if (!fullboard.includes(null)){
      console.log('The Board is Full!  Press clear to reset the board!')
  }
}



// -------------------------------------------

let board = document.getElementById("gametable");
let clear = document.getElementById("clearbutton");
let cell = document.getElementsByClassName("cell");
let boardcounter = 0;

board.addEventListener('click', (event) => {
  let id = event.target.id;
  if (!gameState.board[id[0]][id[1]]) {
    if (boardcounter % 2 === 0) {
    event.target.innerText = gameState.players[0];
    gameState.board[id[0]][id[1]] = gameState.players[0];
    tictactoevalidator(gameState.board);
  }
  if (boardcounter % 2 === 1) {
    event.target.innerText = gameState.players[1];
    gameState.board[id[0]][id[1]] = gameState.players[1];
    tictactoevalidator(gameState.board);
  }
  boardcounter += 1
  }
});

// ---------------------------------------------------------------------------------

clear.addEventListener("click", () => {
  let cells = document.getElementsByClassName('cell')
  console.log(cells)
  let arraycells = Array.from(cells)
  console.log(arraycells)
  arraycells.forEach((element) => {
    element.innerHTML = ''
})
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
})

// ------------------------------------------------------------------------------------------

let input1 = document.getElementsById('playernameone')
let playeronename = document.getElementById('playeronename')
let playertwoname = document.getElementById('playertwoname')

input1.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && input1.innerText.length > 0) {
    input1.style.display = 'none'
    playeronename.innerText = input1.innerText
  }
})
