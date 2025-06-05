// Typewriter effect
const message = "Hey Rere... 💙❤️";
let index = 0;
const typewriter = document.getElementById("typewriter");
function type() {
  if (index < message.length) {
    typewriter.innerHTML += message.charAt(index);
    index++;
    setTimeout(type, 150);
  }
}
type();

// Music toggle
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

// Load confetti script dynamically
function loadConfettiScript(callback) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    script.onload = callback;
    document.head.appendChild(script);
}

// Trigger confetti when "Yes" is clicked
function sayYes() {
    alert("Yay! You said yes! 💖");
    startConfetti();
}

function revealMessage() {
  document.getElementById('hiddenMessage').style.display = 'block';
  document.getElementById('revealHint').style.display = 'none';
  // Optionally, disable further clicks:
  document.getElementById('messageSection').style.pointerEvents = 'none';
  document.getElementById('messageSection').style.opacity = '1';
}

// Slideshow logic
let slideIndex = 0;
let slideTimeout;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");
  if (n === undefined) n = ++slideIndex;
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // Pause videos when not visible
    const vid = slides[i].querySelector('video');
    if (vid) vid.pause();
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // If it's a video, play and wait for it to end before advancing
  const currentSlide = slides[slideIndex - 1];
  const video = currentSlide.querySelector('video');
  if (video) {
    video.currentTime = 0;
    video.play();
    video.onended = () => {
      slideTimeout = setTimeout(() => showSlides(), 1000);
    };
    clearTimeout(slideTimeout);
  } else {
    slideTimeout = setTimeout(() => showSlides(), 3000); // 3s for images
  }
}

function currentSlide(n) {
  slideIndex = n;
  clearTimeout(slideTimeout);
  showSlides(n);
}

// Start slideshow on page load
window.addEventListener('DOMContentLoaded', () => {
  slideIndex = 1;
  showSlides(slideIndex);
});
