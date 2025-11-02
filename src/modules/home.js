import heroImg from "../assets/hero.svg";

export function Home() {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section id="hero">
        <div class="hero-info">
          <h1>
            Hi, I'm Mujtaba Alhadi <br />
            <span>Software Engineer</span>
          </h1>
          <a href="#contact">Contact Me</a>
        </div>
        <div class="hero-img">
          <img src="${heroImg}" alt="hero-image" />
        </div>
      </section>
  `;
}
