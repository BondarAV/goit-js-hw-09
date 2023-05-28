const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

stopButton.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startButton.addEventListener('click', () => {
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');

  body.style.backgroundColor = getRandomHexColor();

  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopButton.addEventListener('click', () => {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');

  clearInterval(timerId);
});
