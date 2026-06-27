const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const roleText = document.querySelector("[data-role-text]");

const roles = [
  "Website Developer",
  "Company Website Specialist",
  "UI / UX Designer",
  "AI & Automation Builder",
  "Business Landing Page Creator"
];

let roleIndex = 0;

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

menuButton.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.addEventListener("click", event => {
  if (event.target.tagName === "A") {
    nav.classList.remove("is-open");
  }
});

if (roleText) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleText.textContent = roles[roleIndex];
  }, 1800);
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();
