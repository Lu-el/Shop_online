import declOfName from './declOfName.js';

const {
  dataDays,
  dataHours,
  dataMinutes,
  dataSeconds,
  declOfNum,
} = declOfName;

const getCorretTime = (time) => {
  const x = new Date();
  const localGmt = x.getTimezoneOffset();
  const deltaMSec = (-localGmt - 180) * 60 * 1000;
  return time + deltaMSec;
};

export const timer = (deadline, timerElement) => {
  const timerDays = document.querySelector('.timer__digit_days');
  const timerHours = document.querySelector('.timer__digit_hours');
  const timerMinutes = document.querySelector('.timer__digit_minutes');
  const timerSeconds = document.querySelector('.timer__digit_seconds');

  const textDays = document.querySelector('.timer__text_days');
  const textHours = document.querySelector('.timer__text_hours');
  const textMinutes = document.querySelector('.timer__text_minutes');
  const textSeconds = document.querySelector('.timer__text_seconds');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const correctTime = getCorretTime(dateStop);
    const dateNow = Date.now();
    const timeRemaining = correctTime - dateNow;

    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, seconds, minutes, hours, days};
  };

  const start = () => {
    const timer = getTimeRemaining();

    timerDays.textContent = timer.days;
    timerHours.textContent = String(timer.hours).padStart(2, 0);
    timerMinutes.textContent = String(timer.minutes).padStart(2, 0);
    timerSeconds.textContent = String(timer.seconds).padStart(2, 0);

    textDays.textContent = declOfNum(timer.days, dataDays);
    textHours.textContent = declOfNum(timer.hours, dataHours);
    textMinutes.textContent = declOfNum(timer.minutes, dataMinutes);
    textSeconds.textContent = declOfNum(timer.seconds, dataSeconds);

    const intervalId = setTimeout(start, 1000);

    if (!timer.days) {
      textDays.classList.add('visually-hidden');
      timerDays.classList.add('visually-hidden');
    } else {
      textSeconds.classList.add('visually-hidden');
      timerSeconds.classList.add('visually-hidden');
    }

    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerElement.classList.add('visually-hidden');
    }
  };

  start();
};
