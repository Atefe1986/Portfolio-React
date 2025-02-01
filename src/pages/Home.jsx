import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>
          Hi, I'm Atefeh Etemadipour, a <span className="highlight">UI/UX</span> Designer
        </h1>
        <p>A passionate web designer specializing in modern, responsive websites crafted with Figma.</p>
        <div className="hero-buttons">
          <a href="resume.pdf" className="btn" target="_blank">Download Resume</a>
          <Link to="/projects" className="btn">View Projects</Link>
        </div>

        <div className="logo-container">
          <div className="circle-logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="circle-text">
            <span><img src="/images/logotext.svg" alt="logo text" /></span>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <article className="project">
          <h3>Luminova Website</h3>
          <a href="/project1-link.html">
            <img src="/images/image1.png" alt="Project 1" />
          </a>
          <p>Responsive website design with Figma.</p>
        </article>

        <article className="project">
          <h3>Smart Home Application</h3>
          <a href="/project2-link.html">
            <img src="/images/image2.png" alt="Project 2" />
          </a>
          <p>Application design with Figma.</p>
        </article>

        <article className="project">
          <h3>Luminova Website</h3>
          <a href="/project1-link.html">
            <img src="/images/image1.png" alt="Project 1" />
          </a>
          <p>Responsive website design with Figma.</p>
        </article>
      </section>

      <section id="email" className="email">
        <h2>Let's work together!</h2>
        <p>
          Reach me at <a href="mailto:atefeh.etemadipour@gmail.com">atefeh.etemadipour@gmail.com</a>
        </p>
      </section>
    </main>
  );
}

export default Home;