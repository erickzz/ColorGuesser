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
  selectAnswer();
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

  return rightColor;
};

const selectAnswer = () => {
  for (const value of boxes) {
    value.addEventListener('click', () => {
      const rightRgb = rgbText.innerHTML;
      if (value.style.backgroundColor == rightRgb) {
        alert('Correto');
        setColors();
      } else {
        alert('Errado');
        setColors();
      }
    });
  }
};

buttonStart.addEventListener('click', startGame);
