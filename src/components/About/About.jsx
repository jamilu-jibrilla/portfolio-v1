import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about_info">
        <h2 className="h2_about green"> About </h2>
        <p className="skills_para_1">
          I'm an Electrical & Electronics Engineering student from MAU. I'm
          passionate about learning new technologies, currently specializing in
          Web Development, working with Javascript and React. I also enjoy
          backend and other fields.
        </p>

        <div className="about_photo desktop_none">
          <div className="cover">
            <div className="img_holder">
              <img src="/jamil.jpg" alt="me" />
            </div>
          </div>
        </div>

        <p className="skills_para_1">Technologies and tools i work with:</p>
        <ul className="skills">
          <div className="skill_1">
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </div>
          <div className="skill_2">
            <li>Bootstrap</li>
            <li>TAILWIND CSS</li>
            <li>Redux</li>
            <li>Sass</li>
          </div>
        </ul>
      </div>
      <div className="about_photo mobile_none">
        <div className="cover">
          <div className="img_holder">
            <img src="/jamil.jpg" alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
