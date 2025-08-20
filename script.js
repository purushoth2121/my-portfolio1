// background animation
const rainBg = document.querySelector(".rain-bg");
for (let i = 0; i < 30; i++) {
  const drop = document.createElement("div");
  drop.classList.add("drop");
  drop.style.left = `${Math.random() * 100}%`;
  drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
  drop.style.animationDelay = `${Math.random() * 5}s`;
  rainBg.appendChild(drop);
}

//  skills image animation up down
  window.addEventListener("load", () => {
    const images = document.querySelectorAll(".skill-img img");
    
    images.forEach((img, index) => {
      setTimeout(() => {
        img.classList.add("animate");
      }, index * 700);
    });
  });



const skillsBtn = document.getElementById("skillsBtn");
const projectsBtn = document.getElementById("projectsBtn");
const skillsSection = document.getElementById("skillsSection");
const projectsSection = document.getElementById("projectsSection");

skillsBtn.addEventListener("click", () => {
  skillsSection.classList.add("active");
  projectsSection.classList.remove("active");

  skillsBtn.classList.add("active");
  projectsBtn.classList.remove("active");

  // restart animation when user leaves projects
  projectsBtn.classList.remove("stop-animation");
});

projectsBtn.addEventListener("click", () => {
  projectsSection.classList.add("active");
  skillsSection.classList.remove("active");

  projectsBtn.classList.add("active");
  skillsBtn.classList.remove("active");

  // stop animation once clicked
  projectsBtn.classList.add("stop-animation");
});

function revealOnScroll() {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach((sec) => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add("reveal");
    } else {
      sec.classList.remove("reveal");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
