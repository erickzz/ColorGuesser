const topSection = document.getElementById('top-section');
const boxes = document.querySelectorAll('.colorBox');
const rgbAnswer = document.getElementById('rgb-code');
const buttonStart = document.querySelector('button');
let answer = rgbAnswer.innerHTML;

const generateColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const setRandomColors = () => {
  for (const value of boxes) {
    let colors = generateColor();
    value.style.backgroundColor = colors;
  }
  rgbAnswer.innerHTML = generateColor();
  const rightAnswer = Math.floor(Math.random() * boxes.length);
  boxes[rightAnswer].style.backgroundColor = rgbAnswer;
};

const getNewAnswer = () => {
  answer = rgbAnswer.innerHTML;
};

const events = () => {
  getNewAnswer();
  let clickedColor;
  const topStyle = answer;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
      clickedColor = boxes[i].style.backgroundColor;
      console.log('Right Color: ' + topStyle);
      console.log('Clicked: ' + clickedColor);
      if (clickedColor == topStyle) {
        alert('Correto');
        setRandomColors();
      } else {
        alert('Errado');
        setRandomColors();
      }
    });
  }
};

rgbAnswer.addEventListener('change', () => {
  answer = rgbAnswer.innerHTML;
});
setRandomColors();
events();
