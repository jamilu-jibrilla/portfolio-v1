import { useState } from "react";
import Button from "../Button/Button";
import "./Nav.css";
import pdf from "../../assets/Jamil_Resume.pdf";
function Nav() {
  const [display, setDisplay] = useState(true);
  const handleDisplay = () => {
    setDisplay((prev) => !prev);
  };


  return (
    <nav className="navbar">
      <span className="logo">JJ</span>
      <ul className={`${display ? "mobile_display" : ""}`}>
        <li>
          <a onClick={handleDisplay} href="#home">Home</a>
        </li>
        <li>
          <a onClick={handleDisplay} href="#about">About</a>
        </li>
        <li>
          <a onClick={handleDisplay} href="#projects">Projects</a>
        </li>
        <li>
          <a onClick={handleDisplay} href="#contact">Contact</a>
        </li>

        <li>
          <a target="_blank" download={"Resume - Jamilu Jibrilla"} href={pdf}>
            <Button text={"Resume"} />
          </a>
        </li>
      </ul>
      <div onClick={handleDisplay} className="hamburger">
        <div className={`${display ? "equal_line" : "line2"} line`}></div>
        <div className={`${display ? "" : "remove"} line`}></div>
        <div className={`${display ? "equal_line" : "line2"} line`}></div>
      </div>
    </nav>
  );
}

export default Nav;
