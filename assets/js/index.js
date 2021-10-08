import menuToggle from "./toggle_menu.js";
import { activeLink, scrollButtonAndHeader } from "./scroll.js";
import validateForm from "./form.js";
import changeTheme from "./theme_dark.js";

const d = document;

window.addEventListener("load", (e) => {
  const $loader = d.getElementById("loader");
  setTimeout(() => {
    d.body.removeChild($loader);
    d.getElementById("content").classList.remove("hidden");
  }, 3000);
});

d.addEventListener("DOMContentLoaded", (e) => {
  menuToggle("nav-menu", "nav-toggle");
  activeLink();
  scrollButtonAndHeader("scroll-top");
  validateForm();
});

changeTheme();
