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
