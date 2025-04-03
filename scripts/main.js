document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navContent = document.querySelector(".nav-content");

  if (hamburger && navContent) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navContent.classList.toggle("active");
    });

    // Close menu when clicking a nav link
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navContent.classList.remove("active");
      });
    });
  } else {
    console.error("Hamburger or Nav Content element not found in the DOM.");
  }
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-93px"; // Adjust based on navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll;
});
