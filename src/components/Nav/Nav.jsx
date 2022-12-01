import { useState } from "react";
import Button from "../Button/Button";
import "./Nav.css";

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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>

        <li>
          <a
            target="_blank"
            download={"Resume - Jamilu Jibrilla"}
            href="src\assets\Jamil_Resume.pdf"
          >
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
