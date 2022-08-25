import '../scss/style.scss'
import { Swiper, Pagination } from 'swiper'

const swiper = (el) => {
  const mql = window.matchMedia('(max-width: 767px)')
  if (mql.matches) {
    new Swiper(el, {
      modules: [Pagination],
      slidesPerView: 1.2,
      speed: 400,
      spaceBetween: 16,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      init: true
    })
  }
}

swiper('.brands-swiper')
swiper('.prices-swiper')
swiper('.repair-types__swiper')

const readMore = (buttonSelector, container) => {
  const readMoreButton = document.querySelector(buttonSelector)
  const content = document.querySelector(`.${container}`)
  readMoreButton.addEventListener('click', () => {
    content.classList.toggle(container + '--read-more')
    readMoreButton.title === 'Скрыть'
      ? (readMoreButton.title = 'Показать все')
      : (readMoreButton.title = 'Скрыть')
    readMoreButton.ariaLabel === 'Скрыть'
      ? (readMoreButton.ariaLabel = 'Показать все')
      : (readMoreButton.ariaLabel = 'Скрыть')
    const buttonText = readMoreButton.lastElementChild
    buttonText.innerText === 'Скрыть'
      ? (buttonText.innerText = 'Показать все')
      : (buttonText.innerText = 'Скрыть')
  })
}

readMore('.brands__read-more', 'brands__content')
readMore('.repair-types__read-more', 'repair-types__content')

const asideMenu = document.createElement('div')
asideMenu.classList.add('menu-aside')
const closeButton = document.querySelector('.close-btn')
const menu = document.querySelector('.menu')
closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--open')
  asideMenu.classList.remove('menu-aside--active')
})
const openButton = document.querySelector('.toggle-nav')
openButton.addEventListener('click', () => {
  menu.classList.toggle('menu--open')
  asideMenu.classList.add('menu-aside--active')
  menu.parentElement.appendChild(asideMenu)
  asideMenu.addEventListener('click', () => {
    menu.classList.remove('menu--open')
    asideMenu.classList.remove('menu-aside--active')
  })
})

const callBackButton = document.querySelector('.btn__icon--tel')
const feedBackButton = document.querySelector('.btn__icon--message')
const popUp = (type) => {
  return document.querySelector(type)
}
const closePopUpButton = (type) =>
  popUp(type).firstElementChild.firstElementChild.addEventListener(
    'click',
    () => {
      popUp(type).classList.remove('pop-up--visible')
    }
  )

callBackButton.addEventListener('click', () => {
  popUp('.pop-up__callback').classList.add('pop-up--visible')
  closePopUpButton('.pop-up__callback')
})
feedBackButton.addEventListener('click', () => {
  popUp('.pop-up__feedback').classList.add('pop-up--visible')
  closePopUpButton('.pop-up__feedback')
})
