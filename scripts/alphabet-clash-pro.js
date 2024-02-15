function play() {
  const hideElement = hideElementById('home');
  const showElement = showElementById('game-screen');
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
      hideElementById('game-screen');
      showElementById('play-again');
    }
  }
}
document.addEventListener('keyup', handelKeyPress);
