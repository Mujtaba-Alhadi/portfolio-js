import heroImg from "../assets/hero.svg";
import { Contact } from "./contact";

export function Home() {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section id="hero">
        <div class="hero-info">
          <h1>
            Hi, I'm Mujtaba Alhadi <br />
            <span>Software Engineer</span>
          </h1>
          <button class="contact-me">Contact Me</button>
        </div>
        <div class="hero-img">
          <img src="${heroImg}" alt="hero-image" />
        </div>
      </section>
  `;

  const contactMeBtn = main.querySelector(".contact-me");
  contactMeBtn.addEventListener("click", () => Contact());
}
