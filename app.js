const menuBtn = document.querySelector('.toggle-menu');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.nav-links');

const toggleMenuEllipsis = document.querySelector('.toggle-menu-ellipsis');
const topLinksContainer = document.querySelector(".top-links-container")
const topLinks = document.querySelector(".top-links")

menuBtn.addEventListener("click", function () {
    // const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight === 0) {
        linksContainer.style.height = `calc(100vh - 60px)`
    }
    else {
        linksContainer.style.height = 0;
    }
});
toggleMenuEllipsis.addEventListener("click" , function () {
    const topLinksHeight = topLinks.getBoundingClientRect().height;
    const topLinksContainerHeight = topLinksContainer.getBoundingClientRect().height;
    if(topLinksContainerHeight === 0) {
        topLinksContainer.style.height = `${topLinksHeight}px`;
    }else {
        topLinksContainer.style.height = 0;
    }
});
window.addEventListener('scroll' , () => {
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > 80) {
        linksContainer.classList.add('fixed-link-container');
    }else {
        linksContainer.classList.remove('fixed-link-container');
    }
});
