const opening = document.getElementById("opening");
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const main = document.getElementById("main");

const leftGarden = document.querySelector(".left-garden");
const rightGarden = document.querySelector(".right-garden");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const questions = document.querySelectorAll(".question");
const answer = document.getElementById("answer");

const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");
const sweetButton = document.getElementById("sweetButton");

const particles = document.querySelector(".particles");

const dateVideo = document.getElementById("dateVideo");

let opened = false;

function openMyLetter() {
  if (opened) {
    return;
  }

  opened = true;

  envelope.classList.add("open");

  createHeartBurst();

  setTimeout(() => {
    leftGarden.classList.add("bloom");
    rightGarden.classList.add("bloom");
  }, 300);

  setTimeout(() => {
    opening.classList.add("hide");
    main.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    music.play().catch(() => {
      musicButton.innerHTML = "🎵 Tap To Play Our Song";
    });
  }, 1400);
}

openLetter.addEventListener("click", openMyLetter);

envelope.addEventListener("click", openMyLetter);

musicButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();

    musicButton.innerHTML = "🔊 Our Song Is Playing ♡";
  } else {
    music.pause();

    musicButton.innerHTML = "🎵 Play Our Song";
  }
});

function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

window.scrollToSection = scrollToSection;

questions.forEach((button) => {
  button.addEventListener("click", () => {
    const message = button.getAttribute("data-message");

    modalMessage.textContent = message;

    modal.classList.add("show");

    createHeartBurst();
  });
});

function closeMessage() {
  modal.classList.remove("show");
}

closeModal.addEventListener("click", closeMessage);

sweetButton.addEventListener("click", closeMessage);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeMessage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMessage();
  }
});

function createParticle() {
  const particle = document.createElement("span");

  particle.className = "particle";

  const symbols = ["♡", "♥", "✦", "✧", "✿", "❀"];

  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  particle.style.left = Math.random() * 100 + "%";

  particle.style.bottom = "-30px";

  particle.style.fontSize = Math.random() * 18 + 10 + "px";

  particle.style.animationDuration = Math.random() * 4 + 5 + "s";

  particles.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 9000);
}

function createHeartBurst() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      createParticle();
    }, i * 80);
  }
}

setInterval(() => {
  if (opened) {
    createParticle();
  }
}, 900);

dateVideo.addEventListener("play", () => {
  music.pause();

  musicButton.innerHTML = "🎵 Play Our Song";
});

dateVideo.addEventListener("pause", () => {
  musicButton.innerHTML = "🎵 Play Our Song";
});

dateVideo.addEventListener("ended", () => {
  musicButton.innerHTML = "🎵 Play Our Song";
});
