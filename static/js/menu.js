// Control dorpdown menu

const header = document.querySelector('header');
const btnMenu = document.querySelector('#menu-toggle');
const btnSearch = document.querySelector('#search');
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
    setNavAsNight();
    openMenu();
  } else {
    closeMenu();
    if (window.pageYOffset == 0) {
      setNavAsDay();
    }
  }
})


function setNavAsNight() {
  header.classList.add('is-night');
  lnLogo.classList.value = 'link--night';
  changeSvgColor(btnMenu, nightFontColor);
  changeSvgColor(btnSearch, nightFontColor);
}

function setNavAsDay() {
  header.classList.remove('is-night');
  lnLogo.classList.value = 'link--grey';
  changeSvgColor(btnMenu, dayFontColor);
  changeSvgColor(btnSearch, dayFontColor);
}

function changeSvgColor(element, color) {
  for (let index = 0; index < element.querySelectorAll('path').length; index++) {
    element.querySelectorAll('path')[index].style.fill = color;
  }
}

function openMenu() {
  main.style.marginTop = dropDown.querySelectorAll('li').length + 5 + 'rem';
  dropDown.classList.remove('is-dis-none');
  menuActivated = true;
  main.addEventListener('click', closeMenu);
}

function closeMenu() {
  dropDown.classList.add('is-dis-none');
  main.style.marginTop = defaultMainMarginTop;
  menuActivated = false;
  try {
    main.removeEventListener('click', closeMenu);
  } catch (error) {
    console.log(error.message)
  }
}

// Change header style while scrolling
window.addEventListener('scroll', () => {
  if(window.pageYOffset == 0) {
    setNavAsDay();
  } else {
    setNavAsNight();
  }
})
