const navbar = document.querySelector(".navbarBack");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting){
            navbar.classList.add("nav-scrolled");
        }else{
            navbar.classList.remove("nav-scrolled");
        }
    });
});


const pageSectionStuff = document.querySelectorAll("#everything");
pageSectionStuff.forEach((el) => observer.observe(el));
