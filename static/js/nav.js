/**
 * Navigator functions:
 *   1. dropdown menu
 *   2. day/night theme mode toggle
 *   3. search button
 */


// Control dorpdown menu
const imgOpenMenuPath = 'static/img/menu.svg'
const imgCloseMenuPath = 'static/img/close.svg'
// const imgSearchPath = 'static/img/search.svg'
const imgNightMode = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+";
const imgDayMode = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg==";

// page header
const header = document.querySelector('header');

// buttons
const btnMenu = document.querySelector('#menu-toggle');
const btnSearch = document.querySelector('#search');
const btnDayNight = document.querySelector('#day-night-toggle');

// images of button
const imgMenu = document.querySelector('#menu-toggle>img');
const imgSearch = document.querySelector('#search>img');
const lnLogo = document.querySelector('#logo');

// the dropdown menu for mobile screen
const dropDown = document.querySelector('.mobile-dropdown')

const main = document.querySelector('main');
const dayFontColor = '#424242',
  nightFontColor = 'rgba(255, 255, 255, 0.8)',
  defaultMainMarginTop = '5rem',
  offset = 5; // set the offset(unit rem) for main element while open dorpdown

var menuActivated = false; // record dorpdown menu state
var nightMode = false; // record day night theme mode

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
  header.classList.add('is-nav--night');
  lnLogo.classList.value = 'link--night';
  imgMenu.classList.add('is-icon--night');
  imgSearch.classList.add('is-icon--night');
}

function setNavAsDay() {
  header.classList.remove('is-nav--night');
  lnLogo.classList.value = 'link--grey';
  imgMenu.classList.remove('is-icon--night');
  imgSearch.classList.remove('is-icon--night');
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
window.addEventListener('scroll', navMode);

function navMode(){
  if(menuActivated || nightMode){
    setNavAsNight();
  } else if (window.pageYOffset != 0) {
    setNavAsNight();
  } else {
    setNavAsDay();
  }
}


// Day or Night theme Control
btnDayNight.addEventListener('click', () => {
  let body = document.querySelector('body');
  if(!nightMode){
    body.classList.add('is-body--night');
    btnDayNight.querySelector('img').src = imgDayMode;
    nightMode = true;
  } else {
    body.classList.remove('is-body--night');
    btnDayNight.querySelector('img').src = imgNightMode;
    nightMode = false;
  }
  navMode();
})



// search button
const inputSearchBar = document.querySelector('.nav__search-bar>input[type="search"]');
const navSearchBar = document.querySelector('.nav__search-bar');
btnSearch.addEventListener('click', () => {
  closeNormalNav();
  openSearchBar();

})
