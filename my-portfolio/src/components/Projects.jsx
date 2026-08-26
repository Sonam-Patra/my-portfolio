import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Smart Shopping",
      description:
        "A smart shopping platform that helps users compare products and find better prices.",
      technologies: "React • JavaScript • CSS",
    },
    {
      title: "Travel & Tourism",
      description:
        "A modern travel and tourism website designed to help users explore destinations and travel services.",
      technologies: "HTML • CSS • JavaScript",
    },
    {
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing my skills, education and projects.",
      technologies: "React • CSS • JavaScript",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p>MY WORK</p>

          <h2>
            My <span>Projects</span>
          </h2>

          <p>
            Here are some of the projects I have created while
            learning and improving my development skills.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-number">
                0{index + 1}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-tech">
                  {project.technologies}
                </span>

                <div className="project-buttons">
                  <a href="#home" className="project-btn">
                    Live Demo
                  </a>

                  <a href="#home" className="project-btn github-btn">
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;