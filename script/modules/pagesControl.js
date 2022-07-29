const pagesContainer = document.querySelector('.numbers-page');

const changeLocationSearch = (page) => {
  if (page === 1) {
    window.location.search = '';
  } else {
    window.location.search = `page=${page}`;
  }
};

const pagesControl = () => {
  pagesContainer.addEventListener('click', (e) => {
    const target = e.target;
    const activePage = document.querySelector('.numbers-page__btn_action');
    const activeNumberPage = +activePage.textContent;
    if (target.closest('.numbers-page__btn')) {
      const pageNumber = +target.textContent;
      changeLocationSearch(pageNumber);
    }
    if (target.closest('.numbers-page__arrow')) {
      if (target.classList.contains('numbers-page__arrow_back-active')) {
        changeLocationSearch(activeNumberPage - 1);
      }
      if (target.classList.contains('numbers-page__arrow_forward-active')) {
        changeLocationSearch(activeNumberPage + 1);
      }
    }
  });
};

try {
  pagesControl();
} catch (e) {
  '';
}
