const getPageNumber = () => {
  const pageNumber = window.location.search;
  return pageNumber;
};

export const loadArticles = async () => {
  const page = getPageNumber();
  const result = await fetch(`
    https://gorest.co.in/public-api/posts${page}`);
  const data = await result.json();
  return data;
};

const createArticleTitle = obj =>
  `<a href="article.html?id=${obj.id}" class="blog-article">
  <div class="blog-article__wrapper-img">
      <img src="./image/blog/shoes_big.jpg"
        alt="" class="blog-article__img">
    </div>
    <div class="blog-article__descript">
      <div class="blog-article__wrapper-text">
        <h2 class="blog-article__title">
          ${obj.title}
        </h2>
        <p class="blog-article__time">
          22 октября 2021, 12:45
        </p>
      </div>
      <div class="reviews">
        <div class="review__icon review__icon_eye">1.2K</div>
        <div class="review__icon review__icon_comment">1.2K</div>
      </div>
    </div>
    </a>`;

const createPageNumbers = obj => {
  let buttons;
  const allPages = obj.pagination.pages;
  const activePage = obj.pagination.page;
  if (activePage === 1) {
    buttons =
      `<button class="numbers-page__arrow numbers-page__arrow_back"
        type="button"
        aria-label="Вернуться на одну страницу назад"></button>
      <div class="numbers-page__items">
        <button class="numbers-page__btn numbers-page__btn_action"
          type="button">
          ${activePage}
        </button>
        <button class="numbers-page__btn"
          type="button">${activePage + 1}</button>
        <button class="numbers-page__btn" type="button">${activePage + 2}
        </button>
      </div>
      <button class="numbers-page__arrow numbers-page__arrow_forward-active"
        type="button"
        aria-label="Перейти на страницу вперед">
      </button>`;
  } else if (activePage === allPages) {
    buttons =
      `<button class="numbers-page__arrow numbers-page__arrow_back-active"
        type="button"
    aria-label="Вернуться на одну страницу назад"></button>
  <div class="numbers-page__items">
    <button class="numbers-page__btn" type="button">
      ${activePage - 2}
    </button>
    <button class="numbers-page__btn"
      type="button">${activePage - 1}</button>
    <button class="numbers-page__btn numbers-page__btn_action"
      type="button">${activePage}</button>
  </div>
  <button class="numbers-page__arrow numbers-page__arrow_forward" type="button"
    aria-label="Перейти на страницу вперед">
  </button>`;
  } else {
    buttons =
      `<button class="numbers-page__arrow numbers-page__arrow_back-active"
        type="button"
    aria-label="Вернуться на одну страницу назад"></button>
  <div class="numbers-page__items">
    <button class="numbers-page__btn" type="button">
      ${activePage - 1}
    </button>
    <button class="numbers-page__btn numbers-page__btn_action"
      type="button">${activePage}</button>
    <button class="numbers-page__btn" type="button">${activePage + 1}</button>
  </div>
  <button class="numbers-page__arrow numbers-page__arrow_forward-active"
  type="button"
    aria-label="Перейти на страницу вперед">
  </button>`;
  }
  return buttons;
};

export const renderArticles = (arr) => {
  const goodsList = arr.map(elem => createArticleTitle(elem));
  return goodsList.join('');
};

export const initBlogList = async () => {
  const data = await loadArticles();
  const articles = await renderArticles(data.data);
  const pagesButtons = createPageNumbers(data.meta);
  const container = document.querySelector('.blog-container');
  const buttonsPage = document.querySelector('.numbers-page');
  try {
    container.innerHTML = articles;
    buttonsPage.innerHTML = pagesButtons;
  } catch (e) {
    '';
  }
};

