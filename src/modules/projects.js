import project1 from "../assets/project1.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project3.svg";

export function Projects() {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section id="projects">
        <h1>My Recent <span>Projects</span></h1>
        <div class="project-imgs">
          <div class="container">
            <img src="${project1}" alt="project" />
          </div>
          <div class="container">
            <img src="${project2}" alt="project" />
          </div>
          <div class="container">
            <img src="${project3}" alt="project" />
          </div>
        </div>
      </section>
  `;
}
