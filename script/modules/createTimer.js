export const createTimer = (divElem) => {
  divElem.classList.add('timer');
  divElem.insertAdjacentHTML('beforeend',
      `<p class="timer__caption">
        До конца акции:
        </p>
        <div class="timer__time">
        <p class="timer__item">
          <span class="timer__digit timer__digit_days"></span><span class="timer__text timer__text_days"></span>
        </p>
        <p class="timer__item">
          <span class="timer__digit timer__digit_hours"></span><span class="timer__text timer__text_hours"></span>
        </p>
        <p class="timer__item">
          <span class="timer__digit timer__digit_minutes"></span><span class="timer__text timer__text_minutes"></span>
        </p>
        <p class="timer__item">
          <span class="timer__digit timer__digit_seconds"></span><span class="timer__text timer__text_seconds"></span>
      </p>`,
  );
};
