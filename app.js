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
const quote = [
   {
    id : 1,
    img : "./images/testimonials-person-1-96x96.jpg",
    title : "Kelly McMillan",
    subTitle : "Regular Customer",
    desc : "I have recently sold my rental property in Nelson via inHouse. Everything about the sale was made seamless by your team. You gave me great advice about what was necessary to expedite the sale."
   },
   {
    id : 2,
    img : "./images/testimonials-person-2-96x96.jpg",
    title : "Harold Barnett",
    subTitle : "Regular Customer",
    desc : "I really appreciate your time and expertise in helping me find and buy my current home in Seattle, WA. Hope we can do business again in the future and I will recommend you to family and friends."
   },
   {
    id : 3,
    img : "./images/testimonials-person-3-96x96.jpg",
    title : "Bill Warner",
    subTitle : "Regular Customer",
    desc : "I have just sold a property with inHouse and I can’t thank them enough. Their team has great communication skills and they have regularly communicated with me throughout the whole process."
   },
   {
    id : 4,
    img : "./images/testimonials-person-4-96x96.jpg",
    title : "Ann Lee",
    subTitle : "Regular Customer",
    desc : "Your skilled team helped me make the dream of selling my old property a reality. The sale went smoothly, and I just closed on an ideal new place I am excited to call home. Thank you for your great services!"
   },
   {
    id : 5,
    img : "./images/testimonials-person-5-96x96.jpg",
    title : "Peter Clarkson",
    subTitle : "Regular Customer",
    desc : "I have to say that inHouse has the best brokers we've ever worked with. Their professionalism, personality, attention to detail, responsiveness and ability to close the deal are outstanding!"
   },
   {
    id : 6,
    img : "./images/testimonials-person-6-96x96.jpg",
    title : "Albert Webb",
    subTitle : "Regular Customer",
    desc : "I have just bought an apartment in LA thanks to you and your brokers. Everything went smooth and easy, the price was quite affordable, and I’m sure I will use your services again in the future."
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

const quoteContainer = document.querySelector(".testimoials-container")

window.addEventListener("DOMContentLoaded", function() {
    displayItems(item);
    displayQuotes(quote);
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
function displayQuotes(quotes) {
    let displayQuote = quotes.map(function(q) {
        return ` <article class="quote">
        <figure class="quote-profile">
            <img src=${q.img} class="img" alt=${q.tittle}>
            <figcaption>
                <h5>${q.title}</h5>
                <p>${q.subTittle}</p>
            </figcaption>
        </figure>
        <div class="quote-info">
            <p>${q.desc}</p>
        </div>
    </article>`
    })
    displayQuote = displayQuote.join("");
    quoteContainer.innerHTML = displayQuote;
}