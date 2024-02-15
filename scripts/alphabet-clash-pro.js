function play() {
  const hideElement = hideElementById('home');
  const hideElement2 = hideElementById('play-again');
  const showElement = showElementById('game-screen');
  const defaultLife = document.getElementById('current-life');
  defaultLife.innerText = 3;
  const defaultScore = document.getElementById('current-score');
  defaultScore.innerText = 0;
  continueGame();
}
function continueGame() {
  const alphabet = getRandomAlphabets();
  const randomAlphabet = document.getElementById('game-screen-input');
  randomAlphabet.innerText = alphabet;
  addBgById(alphabet);
}
function handelKeyPress(event) {
  const playerPressed = event.key;
  if (playerPressed === 'Escape') {
    gameOver();
    removeBgById(expectedKey);
  }
  const expectedKeyElement =
    document.getElementById('game-screen-input').innerText;
  const expectedKey = expectedKeyElement.toLowerCase();
  if (playerPressed === expectedKey) {
    const defaultScore = document.getElementById('current-score');
    const scoreNum = parseInt(defaultScore.innerText);
    const newScore = scoreNum + 1;
    defaultScore.innerText = newScore;
    continueGame();
    removeBgById(expectedKey);
  } else {
    const defaultLife = document.getElementById('current-life');
    const lifeScore = parseInt(defaultLife.innerText);
    const newLifeScore = lifeScore - 1;
    defaultLife.innerText = newLifeScore;
    if (newLifeScore === 0) {
      gameOver();
      removeBgById(expectedKey);
    }
  }
}
document.addEventListener('keyup', handelKeyPress);
function gameOver() {
  hideElementById('game-screen');
  showElementById('play-again');
  document.getElementById('final-score').innerText =
    document.getElementById('current-score').innerText;
}
