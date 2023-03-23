
document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller({
        refreshInterval: 1
      })

    let timeline = new TimelineMax();
    timeline
        .to('.foreground', 6, {
            y: -250,
        })
        .to('.background', 6, {
            y: -80,
        }, '-=6')
        .to('.content, .titlelogo, #title', 6, {
            top: 0
        }, '-=6')
        .to('#everything', 6, {
            top: '0.09px'
        }, '-=6')

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '110%',
        triggerHook: 0,
    })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);
})

const navbar = document.querySelector(".navbarBack");
const backbutt = document.querySelector(".backToTopBtn");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navbar.classList.add("nav-scrolled");
        } else {
            navbar.classList.remove("nav-scrolled");
        }
    });
});

const observerer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            backbutt.classList.add("showbackbutt")
        } else {
            backbutt.classList.remove("showbackbutt")
        }
    });
});


const pageSectionStuff = document.querySelectorAll("#everything");
pageSectionStuff.forEach((el) => observer.observe(el));

const pageSectionStaff = document.querySelectorAll("#everythingwithin");
pageSectionStaff.forEach((el) => observerer.observe(el));
