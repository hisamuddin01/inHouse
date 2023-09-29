const item = [
    {
        id : 1,
        img : "./images/grid-blog-1-571x353.jpg",
        title : "5619 Walnut Hill Ln, Dallas, TX 75229",
        price : "1500/mon",
        area : "30 Sq. Ft.",
        bedroom : "3 Bedrooms",
        desc : "A comfortable residential property located in a quiet and cozy area."
    },
    {
        id : 1,
        img : "./images/grid-blog-2-571x353.jpg",
        title : "1808 Bolingbroke Pl, Fort Worth, TX 76140",
        price : "1300/mon",
        area : "40 Sq. Ft.",
        bedroom : "2 Bedrooms",
        desc : "Perfect for those who love both city life and the countryside."
    },
    {
        id : 3,
        img : "./images/grid-blog-3-571x353.jpg",
        title : "924 Bel Air Rd, Los Angeles, CA 90077",
        price : "1800/mon",
        area : "50 Sq. Ft.",
        bedroom : "4 Bedrooms",
        desc : "Located in 5 mins from downtown, this property is great for anyone."
    },
    {
        id : 4,
        img : "./images/grid-blog-4-571x353.jpg",
        title : "13510 W Cheery Lynn Rd, Avondale, AZ 85392",
        price : "$2700/mon",
        area : "90 Sq. Ft.",
        bedroom : "2 Bedrooms",
        desc : "A luxury mansion for people who enjoy the high-end amenities."
    }
]
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
})


let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const buttons = document.querySelectorAll('.slide-btn');
let timeout;

function showSlide() {
    slides.forEach( function(slide) {
        slide.classList.toggle('active', false);
    });
    buttons.forEach( function(button) {
        button.classList.toggle('slide-btn-active', false);
    });
    slides[slideIndex].classList.toggle('active', true);
    buttons[slideIndex].classList.toggle('slide-btn-active', true);
    slideIndex = (slideIndex + 1) % slides.length;
    clearTimeout(timeout);
    timeout = setInterval(showSlide, 3000)
}

function goToSlide(index) {
    slideIndex = index;
    showSlide
}

buttons.forEach( function(button, index) {
    button.addEventListener('click', function() {
        goToSlide(index);
    })
})
showSlide();


// ========= PROPERTIES ==========
//parent element
const itemsContainer = document.querySelector(".items");

window.addEventListener("DOMContentLoaded", function() {
    displayItems(item);
})

function displayItems(items) {
    let displayItem = items.map(function(e) {
        return ` <div class="item">
        <img src=${e.img} alt=${e.title}>
        <h4 class="item-heading"><a href="#">${e.title}</a></h4>
        <ul>
            <li>$${e.price}</li>
            <li>${e.area}</li>
            <li>${e.bedroom}</li>
        </ul>
        <p>${e.desc}</p>
    </div>`
    });
    displayItem = displayItem.join("")
    itemsContainer.innerHTML = displayItem;
}