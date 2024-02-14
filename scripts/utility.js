function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  const hide = element.classList.add('hidden');
  return hide;
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  const show = element.classList.remove('hidden');
}
function getRandomAlphabets() {
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.slice('');
  const randomNumbers = Math.random() * 25;
  const index = Math.round(randomNumbers);
  const alphabet = alphabets[index];
  // console.log(alphabet);
  return alphabet;
}
function addBgById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-400');
}
