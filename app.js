const gameState = {
    players: ['x', 'o'],
    board: [
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'x', 'x']
    ]
  }

//   ------------------------------------------------------------

function checkRow (rownum) {
    let rowchecker = gameState.board[rownum]
    console.log(rowchecker)
    return rowchecker
}

// checkRow(0)

function checkColumn (colnum) {
    let columnchecker = []
    for (let i = 0; i < gameState.board.length; i++) {
    columnchecker.push(gameState.board[i][colnum])
  }
  console.log(columnchecker) 
  return columnchecker
}

// checkColumn(0)

function checkDiagonal () {
  diagonalchecker = []
  for (let i = 0; i < gameState.board.length; i++) {
    diagonalchecker.push(gameState.board[i][i])
  }
  console.log(diagonalchecker)
  return diagonalchecker
}

// checkDiagonal()

function checkDiagonal2 () {
  diagonalchecker2 = []
  for (let i = 0; i < gameState.board.length; i++) {
    diagonalchecker2.push(gameState.board[i][(i * 2 + 5) % 3]);
  }
  console.log(diagonalchecker2)
  return diagonalchecker2
}

// checkDiagonal2()

// ---------------------------------------

function checkforwin (test) {
    for (let i = 0; i < test.length; i++) {
        testarray = test[i]
        nextstring = testarray.join('')
        if (nextstring === 'xxx' || nextstring === 'ooo') {
        // console.log(nextstring)
        // console.log('WINNER')
    }
        else {
            // console.log('LOSER')
        }
    }
}

// checkforwin(gameState.board)

// ------------------------------------------

function tictacoevalidator (checker) {
  for (let i = 0; i < checker.length; i++) {
  let currRow = checkRow(i)
  let wincheck = checkforwin(currRow)
  if (!wincheck) {
    return "No Winner"
  }
  let currcol = checkColumn(i)
  let wincheck2 = checkforwin(currcol)
  if (!wincheck2) {
    return "No Winner"
  }  
  let currdiag = checkDiagonal(i)
  let wincheck3 = checkforwin(currdiag)
  if (!wincheck3) {
    return "No Winner"
  }
  let currdiag2 = checkDiagonal2(i)
  let wincheck4 = checkforwin(currdiag2)
  if (!wincheck4) {
    return "No Winner"
  }
}
  return "Winner"
}

tictacoevalidator(gameState.board)


// -------------------------------------------

// let playerone = gameState.players[0]
// let playertwo = gameState.players[1]

// const gameArea = document.getElementsByTagName('table');
// gameArea.addEventListener('click', function(clickMove) {
//   if (clickMove.playerone) {
//     null = playeroneId
//   }
// } 
// );
