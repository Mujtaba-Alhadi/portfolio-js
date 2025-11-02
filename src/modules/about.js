import aboutImg from "../assets/about.svg";

export function About() {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section id="about">
        <div class="about-info">
          <h1>About <span>Me</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod debitis sint distinctio aperiam fuga aliquid sequi vitae, mollitia impedit quis rerum dolor voluptates facilis rem
            nostrum necessitatibus atque ullam!
          </p>
        </div>
        <div class="about-img">
          <img src="${aboutImg}" alt="about" />
        </div>
      </section>
  `;
}
