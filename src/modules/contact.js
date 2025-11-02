import contactImg from "../assets/contact.svg";

export function Contact() {
  const main = document.querySelector("main");
  main.innerHTML = `
      <section id="contact">
        <div class="contact-info">
          <h1>Got a Project in <span>Mind?</span></h1>
          <img src="${contactImg}" alt="contact" />
        </div>
        <form action="">
          <label for="name">Your Name</label>
          <input type="text" name="name" placeholder="Name" />
          <label for="email">Your Email</label>
          <input type="email" name="email" placeholder="Email" />
          <label for="message">Your Message</label>
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
  `;
}
