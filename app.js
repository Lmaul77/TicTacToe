// http://localhost:5500/

const gameState = {
  active: true,
  WhoWon: [null, null],
  ScoreCounter: [1, 1],
  PlayerName:  [null, null],
  players: ["x", "o"],
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

//   ------------------------------------------------------------
// Checks every Row
function checkRow(gameboard, rownum) {
  let rowchecker = gameboard[rownum];
  return rowchecker;
}

// Check every Column
function checkColumn(gameboard, colnum) {
  let columnchecker = [];
  for (let i = 0; i < gameboard.length; i++) {
    columnchecker.push(gameboard[i][colnum]);
  }
  return columnchecker;
}

//Check First Diagonal
function checkDiagonal(diagone) {
  diagonalchecker = [];
  for (let i = 0; i < diagone.length; i++) {
    diagonalchecker.push(diagone[i][i]);
  }
  return diagonalchecker;
}

//Check Second Diagonal
function checkDiagonal2(diagtwo) {
  diagonalchecker2 = [];
  for (let i = 0; i < diagtwo.length; i++) {
    diagonalchecker2.push(diagtwo[i][(i * 2 + 5) % 3]);
  }
  return diagonalchecker2;
}

// // ---------------------------------------

//Check to See if X or O won, add Score to counter, if someone won end the game
function checkforwin(test) {
  for (let i = 0; i < test.length; i++) {
    posttest = test.join("");
    if (posttest === "xxx") {
      gameState.WhoWon[0] = `${gameState.PlayerName[0]} has won the game}`
      ScoreCounterX.innerHTML = `${gameState.PlayerName[0]} = ${gameState.ScoreCounter[0]++}`
      gameState.WhoWon[0] = `${gameState.PlayerName[0]} has won!`
      gameState.active = false;
      return true
    }
    else if (posttest === 'ooo') {
      gameState.WhoWon[1] = `${gameState.PlayerName[1]} has won the game}`
      ScoreCounterO.innerHTML = `${gameState.PlayerName[1]} = ${gameState.ScoreCounter[1]}`
      gameState.ScoreCounter[1]++
      gameState.WhoWon[1] = `${gameState.PlayerName[1]} has won!`
      gameState.active = false;
      return true
    }
    else {
      return false
    }
  }
}

//This function makes it so when the game is over no one can continue to click until cleared
function disablegame() {
  Array.from(tdloop).forEach((element) => element.classList.add("compdisable"))
}

// // ------------------------------------------

//Runs through all Check functions and then determines through the wincheck function if the game continues or ends, If someone has won display who won,
//If the board is full still add counter to who won or if tied display board is full click clear to play again
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
    if(gameState.WhoWon[0]) {
        whowins.innerHTML = `${gameState.PlayerName[0]} has won!`
        disablegame()
    }
    if(gameState.WhoWon[1]) {
        whowins.innerHTML = `${gameState.PlayerName[1]} has won!`
        disablegame()
    }
  }

  let fullboard = gameState.board.flat()

  if (!fullboard.includes(null)){
      whowins.innerHTML = 'The Game is Tied!  Click Clear to Play Again!'
      disablegame()
  }
}



// -------------------------------------------

let board = document.getElementById("gametable");
let clear = document.getElementById("clearbutton");
let cell = document.getElementsByClassName("cell");
let whowins = document.getElementById("whowins")
let boardcounter = 0;
let tdloop = document.getElementsByTagName("td");


//Handles the entire game through 2 if statements, Each if statement defines a player move
board.addEventListener('click', (event) => {
  let id = event.target.id;
  
  if (gameState.active) {
    if(!gameState.board[id[0]][id[1]]) {
      if (boardcounter % 2 === 0) {
      event.target.innerText = gameState.players[0];
      gameState.board[id[0]][id[1]] = gameState.players[0];
      whowins.innerHTML = `${gameState.PlayerName[0]} is currently playing!`
      tictactoevalidator(gameState.board)
  }

  if (boardcounter % 2 === 1) {
    event.target.innerText = gameState.players[1];
    gameState.board[id[0]][id[1]] = gameState.players[1];
    whowins.innerHTML = `${gameState.PlayerName[1]} is currently playing!`
    tictactoevalidator(gameState.board)
  }
  boardcounter++
  //Allows the computer to play if the argument is met
  computerplaying()
  }
 }
});

// ---------------------------------------------------------------------------------

//clear function sets the game back to a fresh board
clear.addEventListener("click", () => {
  let cells = document.getElementsByClassName('cell')
  console.log(cells)
  let arraycells = Array.from(cells)
  console.log(arraycells)
  arraycells.forEach((element) => {
    element.innerHTML = ''
})
whowins.innerHTML = ''
Array.from(tdloop).forEach((element) => element.classList.remove("compdisable"))
gameState.active = true;  
boardcounter = 0;
gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
})

// ------------------------------------------------------------------------------------------

let inputplayerone = document.getElementById('playeronename')
let inputplayertwo = document.getElementById('playertwoname')
let playeronename = document.getElementById('playernameone')
let playertwoname = document.getElementById('playernametwo')

//input a name for playerone
inputplayerone.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputplayerone.value.length > 0) {
    playeronename.style.display = 'inline-flex'
    playeronename.style.fontSize = '25px'
    playeronename.style.fontWeight = 'bolder'
    playeronename.style.color = '#CBF3F0'
    playeronename.style.textAlign = 'center' 
    playeronename.style.height = '50px'
    playeronename.style.width = '250px'   
    playeronename.innerHTML = 'Player One: ' + inputplayerone.value
    gameState.PlayerName[0] = inputplayerone.value
    ScoreCounterX.innerHTML = `${inputplayerone.value} = 0`
  }
})

//input a name for player two or set it to computer by pressing enter on the empty input box
inputplayertwo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && inputplayertwo.value.length > 0) {
    playertwoname.style.display = 'inline-flex'
    playertwoname.style.fontSize = '25px'
    playertwoname.style.fontWeight = 'bolder'
    playertwoname.style.color = '#CBF3F0'
    playertwoname.style.textAlign = 'center'  
    playertwoname.style.height = '50px'
    playertwoname.style.width = '250px'  
    playertwoname.innerHTML = 'Player Two: ' + inputplayertwo.value
    gameState.PlayerName[1] = inputplayertwo.value
    ScoreCounterO.innerHTML = `${inputplayertwo.value} = 0`
    chooseplayer()
  }
  else if (event.key === 'Enter'){
    playertwoname.style.display = 'inline-flex'
    playertwoname.style.fontSize = '25px'
    playertwoname.style.fontWeight = 'bolder'
    playertwoname.style.color = 'red'
    playertwoname.style.textAlign = 'center' 
    playertwoname.style.height = '50px'
    playertwoname.style.width = '250px'   
    playertwoname.innerHTML = 'Player Two: Computer'
    gameState.PlayerName[1] = 'Computer'
    ScoreCounterO.innerHTML = `Computer = 0`
  }
  })

// --------------------------------------------------------------------------------------------

//Sets the player to X or O
if (gameState.PlayerName[0]) {
}
else {
  gameState.PlayerName[0] = gameState.players[0]
}

// ------------------------------------------------------------------------------------

//Computer function that allows the computer to randomly generate a position on the board without overriding a current players position
function computerplaying () {
if (boardcounter % 2 === 1 && gameState.PlayerName[1] === 'Computer' && gameState.active) {

let tdarr = [];
for (let i = 0; i < 9; i++) {
  if(tdloop[i].innerText === '') {
    tdarr.push(i)
  }
}

let randomplay = Math.floor(Math.random() * tdarr.length);
let randomchosenid = tdloop[tdarr[randomplay]].id;
let randomchosen = tdloop[tdarr[randomplay]];
let computerplay = gameState.board[randomchosenid[0]][randomchosenid[1]]

computerplay = gameState.players[1]
randomchosen.click()
whowins.innerHTML = `${gameState.PlayerName[0]} is currently playing!`
}
}
// -------------------------------------------------------------------------------

//Randomly selects who starts at the start of any two player game
function chooseplayer() {
  if (Math.random() < 0.5) {
    boardcounter = 0
    whowins.innerHTML = `${gameState.PlayerName[0]} is currently playing!`
  }
  else {
    boardcounter = 1
    whowins.innerHTML = `${gameState.PlayerName[1]} is currently playing!`
  }
}