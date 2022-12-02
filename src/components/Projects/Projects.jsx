import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Projects.css";
import { projectData } from "../data";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h2 className="header_text">Projects</h2>
      <div className="card_list">
        {projectData.slice(0, 3).map((project, index) => (
          <Card
            key={index}
            name={project.name}
            desc={project.description}
            live={project.liveLink}
            github={project.githubLink}
          />
        ))}
      </div>
      <div className="card_list">
        {projectData.slice(3, 6).map((project, index) => (
          <Card
            key={index}
            name={project.name}
            desc={project.description}
            live={project.liveLink}
            github={project.githubLink}
          />
        ))}
      </div>
      <div className="more_projects">
        <a
          target="_blank"
          href="https://github.com/jamilu-jibrilla?tab=repositories"
        >
          <button>show more</button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
