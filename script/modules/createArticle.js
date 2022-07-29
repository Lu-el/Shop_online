const getUser = async (userId) => {
  const result = await fetch(`
    https://gorest.co.in/public-api/users/${userId}`);

  const data = await result.json();
  return data.data.name;
};

const getIdNumber = () => {
  const idNumber = window.location.search;
  return idNumber.slice(4);
};

const loadArticles = async () => {
  const id = getIdNumber();
  const result = await fetch(`
    https://gorest.co.in/public-api/posts/${id}`);
  const data = await result.json();
  return data;
};

const createArticlePage = async (obj) => {
  const user = await getUser(obj.user_id);
  return `<ol class="breadcrumb">
    <li class="breadcrumb__item">
      <a href="index.html" class="breadcrumb__link">Главная</a>
    </li>
    <li class="breadcrumb__item">
      <a href="blog.html" class="breadcrumb__link">Блог</a>
    </li>
    <li class="breadcrumb__item">
      <a href="" class="breadcrumb__link">${obj.title}</a>
    </li>
  </ol>
  <article class="article">
    <h2 class="article__title">
      ${obj.title}
    </h2>
    <div class="article__text">
      <p class="article__parag">
        ${obj.body}
      </p>
    </div>
    <div class="article__sign">
      <a href="blog.html"
        class="article__back" type="button">К списку статей</a>
      <div class="article__info">
        <p class="article__author">${user}</p>
        <p class="blog-article__time">
          22 октября 2021, 12:45
        </p>
        <div class="article_reviews reviews">
          <div class="review__icon review__icon_eye">1.2K</div>
          <div class="review__icon review__icon_comment">1.2K</div>
        </div>
      </div>
    </div>
  </article>`;
};

export const initArticlePage = async () => {
  const data = await loadArticles();
  const article = document.querySelector('.article-content');
  try {
    article.innerHTML = await createArticlePage(data.data);
  } catch (e) {
    '';
  }
};
