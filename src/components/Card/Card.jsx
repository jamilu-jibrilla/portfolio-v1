import "./Card.css";
import githubIcon from "../../assets/project_icons/github_avatar.png";
const Card = (props) => {
  const { name, desc, live, github } = props;

  return (
    <div className="card">
      <div className="icon">
        <a target="_blank" href={github}>
          <img src={githubIcon} alt="Github logo" />
        </a>
      </div>

      <div className="project_text">
        <a target="_blank" href={live}>
          <h1 className="project_name">{name}</h1>
        </a>
        <p className="project_desc">{desc}</p>
      </div>

      <div className="mobile_links">
        <a target="_blank" href={live}>
          <img className="img1" src="/link.png" alt="project live link" />
        </a>
        <a target="_blank" href={github}>
          <img
            className="img2"
            src="/github_mobile.png"
            alt="project github link"
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
