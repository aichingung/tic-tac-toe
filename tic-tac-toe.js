let modal = document.getElementById('modal');
let shade = document.getElementById('shade');
let modal2 = document.getElementById('modal2');
let shade2 = document.getElementById('shade2');
let modal3 = document.getElementById('modal3');
let shade3 = document.getElementById('shade3');


let board = document.querySelectorAll('.board')
let boardContainer = document.querySelectorAll('.board-container')
let scores = document.querySelectorAll('.score')
let resetAllBtn = document.querySelector('.reset-all-btn')
let inputBox = document.querySelector('input')
let player1 = document.querySelector('playerOne')
let player2 = document.querySelector('player-2')
let wholeContainer = document.querySelectorAll('.main-container')
let selectPlayerBtn = document.querySelectorAll('.players-container')
let numberOfWins1 = 1
let numberOfWins2 = 1
let roundsPlayed = 1
let audioElementPoop = new Audio('audio/fart meme sound.mp3')
let audioElementJar = new Audio('audio/ive-got-a-jar-of-dirt-dead-mans-chest_xpve5Zbv.mp3')
let audioDisappointment = new Audio('audio/Crowd,Bar  Pub,Male,Boo,Aww,Friendly Disappointment  -  Sound Effect (1).mp3')
let audioCheers = new Audio('audio/crowd-cheer-sound-effect_AowAcgvh.mp3')
let audioDraw = new Audio('audio/Quack Sound Effect.mp3')


// symbols functions

function poopIcon(event) {
  let clickOnBoard = event.target
  clickOnBoard.classList.add('poop-symbol')
  audioElementPoop.play()
}

function bedIcon(event) {
  let clickOnBoard = event.target
  clickOnBoard.classList.add('bed-symbol')
  audioElementJar.play()
}


for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', playTurn)
}



function johnnyWinsPopUp() {
  modal.style.display = shade.style.display = 'block';
  audioCheers.play()
};
document.getElementById('shade').onclick = function() {
  modal.style.display = shade.style.display = 'none'
}; document.getElementById('modal-img').onclick = function() {
  modal.style.display = shade.style.display = 'none'
}



function AmberWinsPopUp() {
  modal2.style.display = shade2.style.display = 'block';
  audioDisappointment.play()
};
document.getElementById('shade2').onclick = function() {
  modal2.style.display = shade2.style.display = 'none'
}; document.getElementById('modal-img2').onclick = function() {
  modal2.style.display = shade2.style.display = 'none'
}

function drawPopUp() {
  modal3.style.display = shade3.style.display = 'block';
  audioDraw.play()
};
document.getElementById('shade3').onclick = function() {
  modal3.style.display = shade3.style.display = 'none'
}; document.getElementById('modal-img3').onclick = function() {
  modal3.style.display = shade3.style.display = 'none'
}




let player1Turn = false
function playTurn(event) {
  if (event.target.classList.contains('poop-symbol') || event.target.classList.contains('bed-symbol')) {
    return
  }
  if (player1Turn) {
    bedIcon(event)
  } else {
    poopIcon(event)
  }
  player1Turn = !player1Turn
    

  isVictory()

  if(isBoardFull() && !isVictory()) {
    resetBoard()
    return drawPopUp() 
  } else if(isBoardFull() && isVictory()){
    return isVictory()
  }
}


function isVictory() {
  if (board[0].classList.contains('poop-symbol') && board[1].classList.contains('poop-symbol') && board[2].classList.contains('poop-symbol')) {
    document.querySelector('.turd').textContent = numberOfWins1++
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    resetBoard()
    return AmberWinsPopUp() 
  } else if (board[3].classList.contains('poop-symbol') && board[4].classList.contains('poop-symbol') && board[5].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[6].classList.contains('poop-symbol') && board[7].classList.contains('poop-symbol') && board[8].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[0].classList.contains('poop-symbol') && board[4].classList.contains('poop-symbol') && board[8].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[2].classList.contains('poop-symbol') && board[4].classList.contains('poop-symbol') && board[6].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[1].classList.contains('poop-symbol') && board[4].classList.contains('poop-symbol') && board[7].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[0].classList.contains('poop-symbol') && board[3].classList.contains('poop-symbol') && board[6].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[2].classList.contains('poop-symbol') && board[5].classList.contains('poop-symbol') && board[8].classList.contains('poop-symbol')){
    document.querySelector('.turd').textContent = numberOfWins1++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return AmberWinsPopUp() 
  } else if (board[0].classList.contains('bed-symbol') && board[1].classList.contains('bed-symbol') && board[2].classList.contains('bed-symbol')) {
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[3].classList.contains('bed-symbol') && board[4].classList.contains('bed-symbol') && board[5].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[6].classList.contains('bed-symbol') && board[7].classList.contains('bed-symbol') && board[8].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[0].classList.contains('bed-symbol') && board[4].classList.contains('bed-symbol') && board[8].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[2].classList.contains('bed-symbol') && board[4].classList.contains('bed-symbol') && board[6].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[1].classList.contains('bed-symbol') && board[4].classList.contains('bed-symbol') && board[7].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[0].classList.contains('bed-symbol') && board[3].classList.contains('bed-symbol') && board[6].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } else if (board[2].classList.contains('bed-symbol') && board[5].classList.contains('bed-symbol') && board[8].classList.contains('bed-symbol')){
    document.querySelector('.johnny').textContent = numberOfWins2++ 
    resetBoard()
    document.querySelector('.number-of-rounds').textContent = roundsPlayed++
    return johnnyWinsPopUp()
  } 
}

function isBoardFull() { 
  let isFull = true
  board.forEach(function(cell){
    if(cell.classList.contains('poop-symbol') || cell.classList.contains('bed-symbol') ) {
      isFull = isFull && true
      return 
    }
    isFull = false
  })
  return isFull
}

function resetBoard() {
  for (let k = 0; k < board.length; k++) {
    if (board[k].classList.contains('bed-symbol') || board[k].classList.contains('poop-symbol')) {
      board[k].classList.remove('bed-symbol')
      board[k].classList.remove('poop-symbol')
    } 
  }
  if (johnnyWinsPopUp) {
    player1Turn = !player1Turn
  } else if (AmberWinsPopUp) {
    player1Turn = !player1Turn
  }
}

function resetAll() {
  resetBoard()
    if (Number(document.querySelector('.number-of-rounds').textContent)){
      (document.querySelector('.number-of-rounds').textContent) = 0
    }
    if (Number(document.querySelector('.turd').textContent)) {
      document.querySelector('.turd').textContent = 0
    }
    if (Number(document.querySelector('.johnny').textContent)) {
      document.querySelector('.johnny').textContent = 0
    }
  }


resetAllBtn.addEventListener('click', resetAll)











