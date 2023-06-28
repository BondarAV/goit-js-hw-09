import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const daysSpan = document.querySelector('span[data-days]');
const hoursSpan = document.querySelector('span[data-hours]');
const minutesSpan = document.querySelector('span[data-minutes]');
const secondsSpan = document.querySelector('span[data-seconds]');

let timerId = null;

const dateInput = document.querySelector('input#datetime-picker');
const startButton = document.querySelector('button[data-start]');

startButton.setAttribute('disabled', '');

let selectedTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = Date.now();

    if (selectedDates[0].getTime() < date) {
      window.alert('Please choose a date in the future');

      startButton.setAttribute('disabled', '');
    } else {
      startButton.removeAttribute('disabled');

      selectedTime = selectedDates[0].getTime();
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const newValue = String(value).padStart(2, '0');
  return newValue;
}

function changeElementValue(element, newValue) {
  element.textContent = newValue;
}

flatpickr('input#datetime-picker', options);

startButton.addEventListener('click', event => {
  startButton.setAttribute('disabled', '');
  dateInput.setAttribute('disabled', '');

  function executeTimer() {
    const date = Date.now();

    const timeLeft = selectedTime - date;

    const timeLeftArray = Object.values(convertMs(timeLeft));

    const formattedTimeLeftArray = timeLeftArray.map((value, index, array) =>
      addLeadingZero(value)
    );

    changeElementValue(daysSpan, formattedTimeLeftArray[0]);
    changeElementValue(hoursSpan, formattedTimeLeftArray[1]);
    changeElementValue(minutesSpan, formattedTimeLeftArray[2]);
    changeElementValue(secondsSpan, formattedTimeLeftArray[3]);

    const allValuesSum = timeLeftArray.reduce(
      (firstValue, nextValue) => firstValue + nextValue,
      0
    );

    if (allValuesSum === 0) {
      startButton.removeAttribute('disabled');
      dateInput.removeAttribute('disabled');

      return;
    }

    setTimeout(executeTimer, 1000);
  }

  executeTimer();
});
