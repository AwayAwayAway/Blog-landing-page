//  Section Feeds Roll feeds
const reviews = [
    {
        id: 1,
        author: "John Doe",
        image: "./images/avatar1.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea",
    },
    {
        id: 2,
        author: "Sara Jones",
        image: "./images/avatar2.png",
        info: "Annual centralized review: Each expert review team shall prepare the draft individual review reports within six weeks after the end of the review.",
 
    },
    {
        id: 3,
        author: "Rocket",
        image: "./images/avatar3.png",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea"
 
    }
];

const author = document.getElementById ("author");
const image = document.getElementById ("author-image");
const info = document.getElementById ("feed-info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentReview = 0;

window.addEventListener('DOMContentLoaded', () => {
    showReview();
})

function showReview () {
    const item = reviews[currentReview];
    author.textContent = item.author;
    image.src = item.image;
    info.textContent = item.info;
}

nextBtn.addEventListener('click', () => {
    currentReview++;
    if (currentReview > reviews.length - 1) {
        currentReview = 0;
    }
    showReview();
});

prevBtn.addEventListener('click', () => {
    currentReview--;
    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }
    showReview();
});

// section Services dropDown menu
const showBtn = document.querySelectorAll(".show-btn");
const hideText = document.querySelectorAll(".hide-text");

window.addEventListener('DOMContentLoaded', () => {
    hideText[0].classList.toggle("show-link");
})

showBtn.forEach(function (btn) {
    btn.addEventListener('click',  (e)  => {
       const services = e.currentTarget.nextElementSibling;
       services.classList.toggle('show-link');
    })
})

// scroll to top button
const scrollToTop = document.getElementById("scroll-to-top");

scrollToTop.addEventListener('click',  () => {
    window.scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"
    });
})

// scroll page animate taken from GitHub

var scroll = new SmoothScroll('a[href*="#"]', { 
    speed: 500
});
