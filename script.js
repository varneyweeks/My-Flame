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
