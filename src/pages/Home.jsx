import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";

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

         <ProjectCard 
                title="Luminova Website"
                image="/images/image1.png"
                link="https://www.figma.com/proto/zR0gYuppgdUSfe0rUiwpwy/Project?node-id=709-2067&node-type=canvas&t=VBHmn5xJwmHwQ4kA-0&scaling=scale-down&content-scaling=fixed&page-id=39%3A47&starting-point-node-id=709%3A2067"
                compact={true}
        
                description="Luminova: Your ultimate online store for modern lighting, combining sleek designs with innovative functionality."
              />

        <ProjectCard
                title="Smart Home Application"
                image="/images/image2.png"
                link="https://www.figma.com/proto/4gnTa1LUBHBE9u1OrfbO8C/HiFi?node-id=4-56&node-type=frame&t=E5IuSv0VuEBEWRAt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A56"
                compact={true}
        
                description="Smart Home Application: A user-friendly interface for monitoring and managing smart devices, offering real-time alerts and seamless control of your connected home."

              />

       <ProjectCard 
                title="Luminova Website"
                image="/images/image1.png"
                link="https://www.figma.com/proto/zR0gYuppgdUSfe0rUiwpwy/Project?node-id=709-2067&node-type=canvas&t=VBHmn5xJwmHwQ4kA-0&scaling=scale-down&content-scaling=fixed&page-id=39%3A47&starting-point-node-id=709%3A2067"
                compact={true}
        
                description="Luminova: Your ultimate online store for modern lighting, combining sleek designs with innovative functionality."
              />
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