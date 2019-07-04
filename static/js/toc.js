// TOC Start
// set scope
var contentMark = '.post-on-detail__body';
// set scanning deep of headers. When deep is 4, it will scan h1, h2, h3, h4 for building TOC.
var deep = 4;
// if scroll to header with smooth effect, true/false
var smoothScroll = true;
var headersFilter = '';
for (let i = 1; i <= deep; i++) {
    headersFilter += contentMark + ' h' + i + ',';
}
headersFilter = headersFilter.slice(0, headersFilter.length - 1);
var headers = document.querySelectorAll(headersFilter);

var headerOffsetTops = [];

const TableOfContent = document.querySelector('ul.toc');

// make a TOC ul li base on a header element 
function tocItem(header) {
    var li = document.createElement('li');
    li.setAttribute('class', 'toc-' + header.tagName);
    var a = document.createElement('a');
    a.textContent = header.textContent;
    a.setAttribute('href', '#' + header.textContent);
    a.onclick = function (e) {
        e.preventDefault();
        if (smoothScroll) {
            window.scrollTo({
                top: header.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo(0, header.offsetTop);
        }

    };
    li.appendChild(a);
    TableOfContent.appendChild(li);
    header.setAttribute('id', header.textContent);
}

for (let index = 0; index < headers.length; index++) {
    const header = headers[index];
    tocItem(header);
    headerOffsetTops.push(header.offsetTop);
}

// find the looking header
function findLooking() {
    for (let index = 0; index < headerOffsetTops.length; index++) {
        const headerOffsetTop = headerOffsetTops[index];
        if (window.pageYOffset < headerOffsetTop) {
            if (index == 0) {
                return index;
            } else {
                return index - 1;
            }
        }
    }
    return headers.length - 1;
}

var tocLis = document.querySelectorAll('ul.toc li');

// Auto scrolling TOC effect by CSS
function autoTocScroll() {
    var index = findLooking();
    for (let index = 0; index < tocLis.length; index++) {
        const tocLi = tocLis[index];
        tocLi.classList.remove('looking');
    }
    tocLis[index].classList.add('looking');
}

window.onscroll = function () {
    autoTocScroll();
};
window.onresize = function () {
    autoTocScroll();
};
// TOC End

// hideHeaderOnScrollDownShowOnScrollUp Start
// var lastScrollTop = 0;
// const navbar = document.querySelector('nav');

// window.addEventListener('scroll', () => {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop
//     if(scrollTop > lastScrollTop){
//         navbar.style.top = "-80px";
//     } else {
//         navbar.style.top = "0";
//     }
//     lastScrollTop = scrollTop;
// })

// hideHeaderOnScrollDownShowOnScrollUp End
