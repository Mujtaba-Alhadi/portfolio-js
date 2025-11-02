import "./style.css";
import { Home } from "./modules/home.js";
import { Projects } from "./modules/projects.js";
import { About } from "./modules/about.js";
import { Contact } from "./modules/contact.js";

const homeBtn = document.querySelector(".home");
const projectsBtn = document.querySelector(".projects");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");

window.addEventListener("load", () => Home());

homeBtn.addEventListener("click", () => Home());
projectsBtn.addEventListener("click", () => Projects());
aboutBtn.addEventListener("click", () => About());
contactBtn.addEventListener("click", () => Contact());
