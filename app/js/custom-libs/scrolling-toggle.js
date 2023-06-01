function enableScrolling() {
    document.body.style = '';
    document.querySelector('html').classList.remove('disable-scrolling');
}
function disableScrolling() {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style = `padding-right: ${scrollWidth}px`;
    document.querySelector('html').classList.add('disable-scrolling');
}