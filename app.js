const gameState = {
    active: true,
    players: ['x', 'o'],
    board: [
      ['x', 'o', 'x'],
      ['o', 'x', 'o'],
      ['o', 'x', 'x']
    ]
  }

//   ------------------------------------------------------------

function checkRow (gameboard, rownum) {
    let rowchecker = gameboard[rownum]
    // console.log(rowchecker)
    return rowchecker
}

// checkRow(0)

function checkColumn (gameboard, colnum) {
    let columnchecker = []
    for (let i = 0; i < gameboard.length; i++) {
    columnchecker.push(gameboard[i][colnum])
  }
//   console.log(columnchecker) 
  return columnchecker
}

// checkColumn(0)

function checkDiagonal (diagone) {
  diagonalchecker = []
  for (let i = 0; i < diagone.length; i++) {
    diagonalchecker.push(diagone[i][i])
  }
//   console.log(diagonalchecker)
  return diagonalchecker
}

// checkDiagonal()

function checkDiagonal2 (diagtwo) {
  diagonalchecker2 = []
  for (let i = 0; i < diagtwo.length; i++) {
    diagonalchecker2.push(diagtwo[i][(i * 2 + 5) % 3]);
  }
//   console.log(diagonalchecker2)
  return diagonalchecker2
}

// checkDiagonal2()

// ---------------------------------------

function checkforwin (test) {
    for (let i = 0; i < test.length; i++) {
        posttest = test.join('')
        // console.log(posttest)
        if (posttest === 'xxx' || posttest === 'ooo') {
            gameState.active = false
            return true
    }
        else {
            return false
        }
    }
}

// checkforwin(gameState.board)

// ------------------------------------------

function tictacoevalidator (checker) {
    let currdiag = checkDiagonal(checker)
    let wincheck3 = checkforwin(currdiag)
    if (!wincheck3) {
    // console.log('NO WINNER diagone')
    
  }
    let currdiag2 = checkDiagonal2(checker)
    let wincheck4 = checkforwin(currdiag2)
    if (!wincheck4) {
    // console.log('NO WINNER diagtwo')
    
  }
    for (let i = 0; i < checker.length; i++) {
    let currRow = checkRow(checker, i)
    let wincheck = checkforwin(currRow)
    if (!wincheck) {
    // console.log('NO WINNER rownum')
    
  }
    let currcol = checkColumn(checker, i)
    let wincheck2 = checkforwin(currcol)
    if (!wincheck2) {
    // console.log('NO WINNER colnum')
    
  }  
}
    if (!gameState.active) {
      console.log("Game Over!")
    }    

// let fullboard = gameState.board.flat()

    // if (!fullboard.includes(null)){
    //     console.log('The Board is Full!  Press clear to reset the board!')
    // }
    
   
}

tictacoevalidator(gameState.board)
// console.log(gameState.board.flat())

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
