// Control dorpdown menu
const imgOpenMenuPath = 'static/img/menu.svg'
const imgCloseMenuPath = 'static/img/close.svg'
// const imgSearchPath = 'static/img/search.svg'

const header = document.querySelector('header');
const btnMenu = document.querySelector('#menu-toggle');
const btnSearch = document.querySelector('#search');
const imgMenu = document.querySelector('#menu-toggle>img');
const imgSearch = document.querySelector('#search>img');
const lnLogo = document.querySelector('#logo');
const btnDayNight = document.querySelector('#day-night-toggle');
const dropDown = document.querySelector('.mobile-dropdown')
const main = document.querySelector('main');
const dayFontColor = '#424242',
  nightFontColor = 'rgba(255, 255, 255, 0.8)',
  defaultMainMarginTop = '5rem',
  offset = 5; // set the offset(unit rem) for main element while open dorpdown

var menuActivated = false; // record dorpdown menu state

// dropdown menu
btnMenu.addEventListener('click', () => {
  if (!menuActivated) {
    openMenu();
    setNavAsNight();
  } else {
    closeMenu();
    if (window.pageYOffset == 0) {
      setNavAsDay();
    }
  }
})

function setNavAsNight() {
  header.classList.add('is--night');
  lnLogo.classList.value = 'link--night';
  imgMenu.classList.add('is-icon--night');
  imgSearch.classList.add('is-icon--night');
}

function setNavAsDay() {
  header.classList.remove('is--night');
  lnLogo.classList.value = 'link--grey';
  imgMenu.classList.remove('is-icon--night');
  imgSearch.classList.remove('is-icon--night');
}

function changeSvgColor(element, color) {
  for (let index = 0; index < element.querySelectorAll('path').length; index++) {
    element.querySelectorAll('path')[index].style.fill = color;
  }
}

function openMenu() {
  main.style.marginTop = dropDown.querySelectorAll('li').length + 5 + 'rem';
  dropDown.classList.remove('is--disnone');
  menuActivated = true;
  changeMenuIcon();
  main.addEventListener('click', closeMenu);
}

function closeMenu() {
  dropDown.classList.add('is--disnone');
  main.style.marginTop = defaultMainMarginTop;
  menuActivated = false;
  changeMenuIcon();
  try {
    main.removeEventListener('click', closeMenu);
  } catch (error) {
    console.log(error.message)
  }
}

function changeMenuIcon(){
  (menuActivated) ? imgMenu.src = imgCloseMenuPath : imgMenu.src = imgOpenMenuPath
}

// Change header style while scrolling
window.addEventListener('scroll', () => {
  if(menuActivated){
    setNavAsNight();
  } else if (window.pageYOffset != 0) {
    setNavAsNight();
  } else {
    setNavAsDay();
  }
})
