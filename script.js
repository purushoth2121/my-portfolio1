// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.display = "none";
    }
  }, 2000);
});

// Background rain animation
const rainBg = document.querySelector(".rain-bg");
if (rainBg) {
  for (let i = 0; i < 30; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
    drop.style.animationDelay = `${Math.random() * 4}s`;
    rainBg.appendChild(drop);
  }
}

// Skills image animation
window.addEventListener("load", () => {
  const images = document.querySelectorAll(".skill-img img");
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("animate");
    }, index * 800);
  });
});



// Section toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        skills: {
            button: document.getElementById("skillsBtn"),
            content: document.getElementById("skillsSection")
        },
        projects: {
            button: document.getElementById("projectsBtn"),
            content: document.getElementById("projectsSection")
        },
        qualification: {
            button: document.getElementById("qualificationBtn"),
            content: document.getElementById("educationsection")
        }
    };

// Helper function to toggle sections
function toggleSection(activeSection) {
  // Deactivate all sections first
  Object.values(sections).forEach(({ button, content }) => {
    button?.classList.remove("active");
    content?.classList.remove("active");
    if (button === sections.projects.button) {
      button.classList.remove("stop-animation");
    }
  });

  // Activate the selected section
  const section = sections[activeSection];
  if (section.button && section.content) {
    section.button.classList.add("active");
    section.content.classList.add("active");
    
    if (activeSection === "projects") {
      section.button.classList.add("stop-animation");
    }
  }
}

    // Add click event listeners
    if (sections.skills.button) {
        sections.skills.button.addEventListener("click", () => toggleSection("skills"));
    }
    if (sections.projects.button) {
        sections.projects.button.addEventListener("click", () => toggleSection("projects"));
    }
    if (sections.qualification.button) {
        sections.qualification.button.addEventListener("click", () => toggleSection("qualification"));
    }
    
    // Show skills section by default
    toggleSection("skills");

    // Skill group toggle functionality
    const skillToggles = document.querySelectorAll('.skill-toggle');
    skillToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
        });
    });
});

// Scroll reveal animation
function revealOnScroll() {
  const sections = document.querySelectorAll("section");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add("reveal");
    } else {
      section.classList.remove("reveal");
    }
  });
}

// Add scroll and load event listeners
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
window.addEventListener("DOMContentLoaded", () => {
  toggleSection("skills");
});
// Skill list toggle
  document.querySelectorAll(".skill-toggle").forEach(button => {
    button.addEventListener("click", () => {
      const skillList = button.nextElementSibling;
      skillList.classList.toggle("active");
    });
  });
