const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

const sus = new Date();
const cooc = Date.now();
console.log(sus);
console.log(cooc);

stopButton.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function toggleAttributes(firstButton, secondButton) {
  firstButton.setAttribute('disabled', '');
  secondButton.removeAttribute('disabled');
}

startButton.addEventListener('click', () => {
  toggleAttributes(startButton, stopButton);

  body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  toggleAttributes(stopButton, startButton);

  clearInterval(timerId);
});
