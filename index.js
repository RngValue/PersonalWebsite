function scrollToThe(a) {
    const sekce = document.querySelector(a);
    sekce.scrollIntoView();
}

//art gallery popup

document.querySelectorAll('.artGrid div img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popupimg').style.display = 'flex';
        document.querySelector('.popupimg .theimg').src = image.getAttribute('src');
    }
});

document.querySelector('.popupimg .reallycoolclosebtn').onclick = () => {
    document.querySelector('.popupimg').style.display = 'none';
}

//Doxes the user

let audio = new Audio("vineBoom.wav");

function doxme() {
    audio.play()
    document.querySelector('.thedox').classList.remove("thedox");
    document.querySelector('.doxButton').classList.add("thedox");
    document.querySelector('.memeImage').classList.add("memeImageAnim");
    if (document.getElementById("yourip").innerHTML == "" || document.getElementById("yourip").innerHTML == "yourcountry") {
        // Adblock enabled: do something
        document.getElementById("adblockdetectionspan").innerHTML = `<br>(This does not work, because you're most likely using an <span class="gradient-text">adblocker</span>, you scummy bastard)`;
    }
}

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

var detectOS = "Unknown OS";

if (navigator.appVersion.indexOf("Win") != -1)
    detectOS = "Windows";

if (navigator.appVersion.indexOf("Mac") != -1)
    detectOS = "MacOS";

if (navigator.appVersion.indexOf("Linux") != -1)
    detectOS = "Linux";

document.getElementById('yourbrowser').innerHTML = browserName;
document.getElementById('youros').innerHTML = detectOS;

var myIP = ""

$.getJSON("https://api.ipify.org?format=json", function (data) {
    $("#yourip").html(data.ip);
    // this one's here in case ipinfo breaks
})

$.getJSON('https://ipinfo.io?token=3084c3f622bfdc', function (data) {
    $("#yourip").html(data.ip);
    $("#yourcountry").html(data.country);
    $("#yourregion").html(data.region);
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

const observerrer = new IntersectionObserver((entries) => {
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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            entry.target.classList.remove("hiddenoppos")
        }
    });
});

const observerSo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showSocials")
        }
    });
});

const observerTits = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("showTits")
        }
    });
});

const pageSectionStuff = document.querySelectorAll("#everything");
pageSectionStuff.forEach((el) => observerrer.observe(el));

const pageSectionStaff = document.querySelectorAll("#everythingwithin");
pageSectionStaff.forEach((el) => observerer.observe(el));

const observeTexts = document.querySelectorAll(".hidden");
observeTexts.forEach((el) => observer.observe(el));

const observeTextsOp = document.querySelectorAll(".hiddenoppos");
observeTextsOp.forEach((el) => observer.observe(el));

const observeTitles = document.querySelectorAll(".hiddenTitle");
observeTitles.forEach((el) => observerTits.observe(el));

const observeSocialItems = document.querySelectorAll(".socialItem");
observeSocialItems.forEach((el) => observerSo.observe(el));