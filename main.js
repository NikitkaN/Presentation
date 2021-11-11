console.log('Hello World')
const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

slider.style.display = 'none';
previous.style.visibility = 'hidden';
next.style.visibility = 'hidden';

function soundClick() {
    var audio = new Audio('Ambient.mp3');
    audio.play();
    audio.loop = true;

    container.style.display = 'none';
    slider.style.display = 'grid';
    previous.style.visibility = 'visible';
    next.style.visibility = 'visible';
}

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";    
}