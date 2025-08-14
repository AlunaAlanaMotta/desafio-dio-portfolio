//menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
// Smooth scroll for anchor links
window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector(".about");
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {
    aboutSection.classList.add("show");
  }
});

// Carousel functionality
const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".carousel li");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let index = 0;

function showSlide(i) {
  if (i < 0) index = slides.length - 1;
  else if (i >= slides.length) index = 0;
  else index = i;

  carousel.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

// Efeito de cursor personalizado
const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("a, button, .btn-2");

// Seguir o mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Adicionar efeito hover nos links
links.forEach((link) => {
  link.addEventListener("mouseenter", () => cursor.classList.add("hover"));
  link.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});
