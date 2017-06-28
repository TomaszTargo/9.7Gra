function checkOnclickEvent(param) {
  console.log(param);
}
var newGameBtn = document.getElementById('js-newGameButton');

newGameBtn.addEventListener('click', newGame);

//wrtości początkowe

var gameState = 'notStarted';
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };
//
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

//wyłączenie przycisków wyboru
var offpickElem = pickElem.style.display = 'none';

//wybranie nowej gry
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

// rozpoczęcie gry

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

//wcisniecie przycisku

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
  }
console.log('newGame');
}

//wybór gracza
var pickRock = document.getElementById('js-playerPick_rock'),
     pickPaper = document.getElementById('js-playerPick_paper'),
     pickScissors = document.getElementById('js-playerPick_scissors');
pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

//funkcja wyboru gracza

var x = Math.floor(Math.random()*3);
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

//umieszczenie na stronie
var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'noone'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win! :)";
        computerResultElem.innerHTML = "Lost :(";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win! :)";
        playerResultElem.innerHTML = "Lost :(";
        computer.score++;
    } 
setGamePoints();
if (player.score == 10 ) {
        playerResultElem.innerHTML = "You are the WINNER!!!"
        computerResultElem.innerHTML = "You lost";
        pickElem.style.display = 'none';
    } else if (computer.score == 10) {
        computerResultElem.innerHTML = "You are the WINNER!!!";
        playerResultElem.innerHTML = "You lost"
        pickElem.style.display = 'none';
    }
}


//funkcaj sprawdzająca wynik
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

//wyświetlanie wyników
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
    
}
