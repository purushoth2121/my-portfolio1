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
