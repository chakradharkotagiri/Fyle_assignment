let currentSlideIndex = 1;
const slides = document.querySelectorAll('.img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length - 1; // Exclude cloned slides
const sliderbox = document.querySelector('.sliderbox');
const slideWidth = slides[0].clientWidth;

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.remove('active');
    if (i === index) {
      dot.classList.add('active');
    }
  });
}

function showSlide(index) {
  sliderbox.style.transition = 'transform 1s ease-in-out';
  sliderbox.style.transform = `translateX(${-index * (slideWidth + 20)}px)`; // Adjust margin value if necessary

  if (index === 0) {
    setTimeout(() => {
      sliderbox.style.transition = 'none';
      sliderbox.style.transform = `translateX(${-totalSlides * (slideWidth + 20)}px)`; // Adjust margin value if necessary
    }, 1000);
    currentSlideIndex = totalSlides;
  } else if (index === totalSlides + 1) {
    setTimeout(() => {
      sliderbox.style.transition = 'none';
      sliderbox.style.transform = `translateX(${-(slideWidth + 20)}px)`; // Adjust margin value if necessary
    }, 1000);
    currentSlideIndex = 1;
  }

  updateDots((index - 1 + totalSlides) % totalSlides);
}

function nextSlide() {
  currentSlideIndex++;
  if (currentSlideIndex >= totalSlides ) {
    currentSlideIndex = 1;
  }
  showSlide(currentSlideIndex);
}

function currentSlide(index) {
  currentSlideIndex = index + 1;
  showSlide(currentSlideIndex);
}

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000);

// Initialize slider position
window.addEventListener('load', () => {
  sliderbox.style.transition = 'none';
  sliderbox.style.transform = `translateX(${-(slideWidth + 20)}px)`; // Adjust margin value if necessary
  setTimeout(() => {
    sliderbox.style.transition = 'transform 1s ease-in-out';
  }, 50);
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const texts = document.querySelectorAll(".text");
    let interval;

    function showSlide(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
        texts.forEach((text, i) => {
            text.classList.toggle("active", i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 6000); 
    }

    texts.forEach((text, index) => {
        text.addEventListener("click", () => {
            showSlide(index);
            resetInterval();
        });
    });

    interval = setInterval(nextSlide, 6000); 

    showSlide(currentIndex);
});
