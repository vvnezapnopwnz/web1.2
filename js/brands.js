const screenWidth = window.screen.width;
let mql = window.matchMedia('(max-width: 767px)');
window.addEventListener('load', () => {
if (mql.matches) {
let newSwiper = new Swiper('.mySwiper', {
slidesPerView: 1.2,
spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
init: true
});
}
})

const readMoreButton = document.querySelector('.brands__read-more');
const brandsContent = document.querySelector('.brands__content');
console.log(readMoreButton);
readMoreButton.addEventListener('click', () => {
brandsContent.classList.toggle('brands__content--read-more');
readMoreButton.title === 'Скрыть' ? readMoreButton.title = 'Показать все' : readMoreButton.title = 'Скрыть';
readMoreButton.ariaLabel === 'Скрыть' ? readMoreButton.ariaLabel = 'Показать все' : readMoreButton.ariaLabel = 'Скрыть';
const buttonText = readMoreButton.lastElementChild;
buttonText.innerText === 'Скрыть' ? buttonText.innerText = 'Показать все' : buttonText.innerText = 'Скрыть';
})