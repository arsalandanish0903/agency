const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navLinks = document.getElementById("navLinks");
const menuIcons = document.querySelector(".menu-icons");

openMenu.addEventListener("click", () => {
    navLinks.classList.add("active");
    menuIcons.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuIcons.classList.remove("active");
});


window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-custom");
    if (window.scrollY > 100) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
});



// counter
function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = target / 200; // speed control

    let current = 0;

    const update = () => {
        if (current < target) {
            current += increment;
            counter.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            counter.textContent = target.toLocaleString(); // adds comma for 5,000
        }
    };

    update();
}

function handleScrollCounters() {
    const section = document.getElementById("counters");
    const counters = document.querySelectorAll(".counter");
    let started = false;

    window.addEventListener("scroll", () => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (!started && sectionTop < windowHeight - 100) {
            counters.forEach(counter => animateCounter(counter));
            started = true;
        }
    });
}

document.addEventListener("DOMContentLoaded", handleScrollCounters);





const track = document.querySelector('.slider-track');
const dotsContainer = document.querySelector('.slider-dots');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
const slides = document.querySelectorAll('.slider-track li');

let index = 0;

function createDots() {
    dotsContainer.innerHTML = '';
    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        if (i === index) dot.classList.add('active');
        dot.addEventListener('click', () => {
            index = i;
            updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = dotsContainer.querySelectorAll('span');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function updateSlider() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
        const slideWidth = track.offsetWidth;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
    } else {
        track.style.transform = 'none';
    }
    updateDots();
}

nextBtn?.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        updateSlider();
    }
});

prevBtn?.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

window.addEventListener('resize', () => {
    index = 0;
    createDots(); // ← Add this
    updateSlider();
});

window.addEventListener('load', () => {
    createDots();
    updateSlider();
});


// accordion
const items = document.querySelectorAll('.accordion-item');

items.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        items.forEach(i => {
            if (i !== item) {
                i.classList.remove('active');
                i.querySelector('.icon').innerHTML = '▼';
            }
        });

        item.classList.toggle('active');
        const icon = item.querySelector('.icon');
        icon.innerHTML = item.classList.contains('active') ? '▲' : '▼';
    });
});

