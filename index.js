const navbar = document.querySelector(".navbarBack");
const backbutt = document.querySelector(".backToTopBtn");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            navbar.classList.add("nav-scrolled");
        }else{
            navbar.classList.remove("nav-scrolled");
        }
    });
});

const observerer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            backbutt.classList.add("showbackbutt")
        }else{
            backbutt.classList.remove("showbackbutt")
        }
    });
});


const pageSectionStuff = document.querySelectorAll("#everything");
pageSectionStuff.forEach((el) => observer.observe(el));

const pageSectionStaff = document.querySelectorAll("#everythingwithin");
pageSectionStaff.forEach((el) => observerer.observe(el));
