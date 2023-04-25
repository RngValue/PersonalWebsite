function scrollToThe(a) {
    const sekce = document.querySelector(a);
    sekce.scrollIntoView();
}

//Doxes the user

let userAgent = navigator.userAgent;
let browserName;

if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "Chrome";
} else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "Firefox";
} else if (userAgent.match(/safari/i)) {
    browserName = "Safari";
} else if (userAgent.match(/opr\//i)) {
    browserName = "Opera";
} else if (userAgent.match(/edg/i)) {
    browserName = "Edge";
} else {
    browserName = "No browser detection";
}

document.getElementById('yourbrowser').innerHTML = browserName;

$.getJSON("https://api.ipify.org?format=json", function (data) {
    // Setting text of element P with id gfg
    $("#yourip").html(data.ip);
})

//End of doxing

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller({
        refreshInterval: 1
    })

    let timeline = new TimelineMax();
    timeline
        .to('.foreground', 6, {
            y: -2500,
        })
        .to('.background', 6, {
            y: -1300,
        }, '-=6')
        .to('.content, .titlelogo, #title', 6, {
            top: 0
        }, '-=6')
        .to('#everything', 6, {
            top: '0.09px'
        }, '-=6')

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '1000%',
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