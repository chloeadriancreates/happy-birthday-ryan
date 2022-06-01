/* LOADER */
const loader = document.getElementById('loader');
const main = document.getElementById('main');

setTimeout(() => {
    main.style.display = 'block';
}, 3000)

setTimeout(() => {
    loader.style.display = 'none';
}, 4000)

/* SMOOTH SCROLL */
const toContrib1 = document.getElementById('toContrib1');
const contrib1 = document.getElementById('contrib1');
const toContrib2 = document.getElementById('toContrib2');
const contrib2 = document.getElementById('contrib2');
const toContrib3 = document.getElementById('toContrib3');
const contrib3 = document.getElementById('contrib3');
const toContrib4 = document.getElementById('toContrib4');
const contrib4 = document.getElementById('contrib4');
const toContrib5 = document.getElementById('toContrib5');
const contrib5 = document.getElementById('contrib5');
const toContrib6 = document.getElementById('toContrib6');
const contrib6 = document.getElementById('contrib6');
const toContrib7 = document.getElementById('toContrib7');
const contrib7 = document.getElementById('contrib7');
const toContrib8 = document.getElementById('toContrib8');
const contrib8 = document.getElementById('contrib8');
const toContrib9 = document.getElementById('toContrib9');
const contrib9 = document.getElementById('contrib9');
const toContrib10 = document.getElementById('toContrib10');
const contrib10 = document.getElementById('contrib10');
const toContrib11 = document.getElementById('toContrib11');
const contrib11 = document.getElementById('contrib11');
const toContrib12 = document.getElementById('toContrib12');
const contrib12 = document.getElementById('contrib12');
const toThanks = document.getElementById('toThanks');
const thanks = document.getElementById('thanks');

function smoothScroll(anchor) {
    const elementPosition = anchor.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

toContrib1.addEventListener('click', function() {
    smoothScroll(contrib1);
});
toContrib2.addEventListener('click', function() {
    smoothScroll(contrib2);
});
toContrib3.addEventListener('click', function() {
    smoothScroll(contrib3);
});
toContrib4.addEventListener('click', function() {
    smoothScroll(contrib4);
});
toContrib5.addEventListener('click', function() {
    smoothScroll(contrib5);
});
toContrib6.addEventListener('click', function() {
    smoothScroll(contrib6);
});
toContrib7.addEventListener('click', function() {
    smoothScroll(contrib7);
});
toContrib8.addEventListener('click', function() {
    smoothScroll(contrib8);
});
toContrib9.addEventListener('click', function() {
    smoothScroll(contrib9);
});
toContrib10.addEventListener('click', function() {
    smoothScroll(contrib10);
});
toContrib11.addEventListener('click', function() {
    smoothScroll(contrib11);
});
toContrib12.addEventListener('click', function() {
    smoothScroll(contrib12);
});
toThanks.addEventListener('click', function() {
    smoothScroll(thanks);
});