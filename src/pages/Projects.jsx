import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <ProjectCard 
        title="Luminova Website"
        image="/images/image1.png"
        link="https://www.figma.com/proto/zR0gYuppgdUSfe0rUiwpwy/Project?node-id=709-2067&node-type=canvas&t=VBHmn5xJwmHwQ4kA-0&scaling=scale-down&content-scaling=fixed&page-id=39%3A47&starting-point-node-id=709%3A2067"

        description="Luminova: Your ultimate online store for modern lighting, combining sleek designs with innovative functionality."
      />
      <ProjectCard
        title="Smart Home Application"
        image="/images/image2.png"
        link="https://www.figma.com/proto/4gnTa1LUBHBE9u1OrfbO8C/HiFi?node-id=4-56&node-type=frame&t=E5IuSv0VuEBEWRAt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A56"

        description="Smart Home Application: A user-friendly interface for monitoring and managing smart devices, offering real-time alerts and seamless control of your connected home."
      />
       <ProjectCard
        title="Luminova Website"
        image="/images/image1.png"
        link="https://www.figma.com/proto/zR0gYuppgdUSfe0rUiwpwy/Project?node-id=709-2067&node-type=canvas&t=VBHmn5xJwmHwQ4kA-0&scaling=scale-down&content-scaling=fixed&page-id=39%3A47&starting-point-node-id=709%3A2067"

        description="Luminova: Your ultimate online store for modern lighting, combining sleek designs with innovative functionality."
      />
    </section>
  );
}

export default Projects;