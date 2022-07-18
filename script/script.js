import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';

const defineTimer = () => {
  const timerContent = document.querySelector('.hero__timer');

  if (timerContent.dataset.timerDeadline) {
    const deadline = timerContent.dataset.timerDeadline;
    createTimer(timerContent);
    timer(deadline, timerContent);
  }
};

defineTimer();
