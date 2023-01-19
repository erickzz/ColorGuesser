const topSection = document.getElementById('top-section');
const boxes = document.querySelectorAll('.colorBox');
const rgbText = document.getElementById('rgb-code');
const buttonStart = document.querySelector('h3');

const rgbAnswer = rgbText.innerHTML;

const startGame = () => {
  for (const value of boxes) {
    value.style.display = 'block';
  }
  setColors();
};

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const setColors = () => {
  for (const value of boxes) {
    value.style.backgroundColor = generateColor();
  }
  const rightColor = (rgbText.innerHTML = generateColor());
  const selectRightBox = Math.floor(Math.random() * boxes.length);
  boxes[selectRightBox].style.backgroundColor = rightColor;

  console.log(rightColor);

  console.log('Resposta certa: ' + selectRightBox);

  selectAnswer(rightColor);
};

const selectAnswer = (answer) => {
  for (const value of boxes) {
    value.addEventListener('click', () => {
      if (value.style.backgroundColor == answer) {
        alert('Correto');
        startGame();
      } else {
        alert('Errado');
        startGame();
      }
    });
  }
};

buttonStart.addEventListener('click', startGame);
