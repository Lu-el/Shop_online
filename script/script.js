import {timer} from './modules/timer.js';
import {createTimer} from './modules/createTimer.js';
import {initBlogList} from './modules/blogList.js';
import {initArticlePage} from './modules/createArticle.js';
import './modules/pagesControl.js';

const defineTimer = () => {
  const timerContent = document.querySelector('.hero__timer');

  try {
    if (timerContent.dataset.timerDeadline) {
      const deadline = timerContent.dataset.timerDeadline;
      createTimer(timerContent);
      timer(deadline, timerContent);
    }
  } catch (e) {
    '';
  }
};

defineTimer();
initBlogList();
initArticlePage();
