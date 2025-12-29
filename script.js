// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== FADE-IN ON SCROLL =====
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
