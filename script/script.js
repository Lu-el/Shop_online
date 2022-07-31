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

const initApp = () => {
  const locationHref = window.location.href;
  if (locationHref.indexOf('index') > -1) {
    defineTimer();
  } else if (locationHref.indexOf('blog') > -1) {
    initBlogList();
  } else if (locationHref.indexOf('article') > -1) {
    initArticlePage();
  }
};

initApp();
