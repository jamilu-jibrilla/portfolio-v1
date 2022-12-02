import "./Header.css";
import linkedin from "../../assets/social_media_icons/linkedin.png";
import twitter from "../../assets/social_media_icons/twitter.png";
import insta from "../../assets/social_media_icons/insta.png";
import github from "../../assets/social_media_icons/github.png";
import Button from "../Button/Button";
function Header() {
  return (
    <header id="home" className="header">
      <div className="text">
        <div className="social_media">
          <a href="https://www.linkedin.com/in/jamilu-jibrilla-575441211/">
            <img src={linkedin} alt="linkedIn icon" />
          </a>
          <a href="https://mobile.twitter.com/Jb_jameel">
            <img src={twitter} alt="twitter icon" />
          </a>
          <a href="#">
            <img src={insta} alt="instagram icon" />
          </a>
          <a href="https://github.com/jamilu-jibrilla">
            <img src={github} alt="github icon" />
          </a>
          <hr className="hr" />
        </div>

        <div className="info">
          <p className="intro">Hi, my name is</p>
          <p className="name green">Jamilu Jibrilla</p>
          <p className="intro_paragraph">
            a <span className="green">Frontend Developer</span> with experience{" "}
            <br />
            developing websites using HTML, CSS and Javascript <br />
            framework{" "}
            <span className="normal">
              {" "}
              meeting the highest standards for web design, <br />
              user experience, best practices and speed to promote organization{" "}
              <br />
              specifications.
            </span>
          </p>
          <a href="#contact">
            <Button text={"Contact me"} />
          </a>
        </div>

        <div className="intro"></div>
      </div>

      <div className="background"></div>
    </header>
  );
}

export default Header;
