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
    // console.log(rowchecker)
    return rowchecker
}

// checkRow(0)

function checkColumn (colnum) {
    let columnchecker = []
    for (let i = 0; i < gameState.board.length; i++) {
    columnchecker.push(gameState.board[i][colnum])
  }
//   console.log(columnchecker) 
  return columnchecker
}

// checkColumn(0)

function checkDiagonal () {
  diagonalchecker = []
  for (let i = 0; i < gameState.board.length; i++) {
    diagonalchecker.push(gameState.board[i][i])
  }
//   console.log(diagonalchecker)
  return diagonalchecker
}

// checkDiagonal()

function checkDiagonal2 () {
  diagonalchecker2 = []
  for (let i = 0; i < gameState.board.length; i++) {
    diagonalchecker2.push(gameState.board[i][(i * 2 + 5) % 3]);
  }
//   console.log(diagonalchecker2)
  return diagonalchecker2
}

// checkDiagonal2()

// ---------------------------------------

function checkforwin (test) {
    for (let i = 0; i < test.length; i++) {
        test.join('')
        if (test === 'xxx' || test === 'ooo') {
        return true
        // console.log(nextstring)
        // console.log('WINNER')
    }
        else {
        return false
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
    console.log('NO WINNER')
    return "No Winner"
  }
  let currcol = checkColumn(i)
  let wincheck2 = checkforwin(currcol)
  if (!wincheck2) {
    console.log('NO WINNER')
    return "No Winner"
  }  
  let currdiag = checkDiagonal(i)
  let wincheck3 = checkforwin(currdiag)
  if (!wincheck3) {
    console.log('NO WINNER')
    return "No Winner"
  }
  let currdiag2 = checkDiagonal2(i)
  let wincheck4 = checkforwin(currdiag2)
  if (!wincheck4) {
    console.log('NO WINNER')
    return "No Winner"
  }
}
console.log('WINNER')  
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
