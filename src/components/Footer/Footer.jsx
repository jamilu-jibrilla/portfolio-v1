import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social_icons">
        <a href="https://mobile.twitter.com/Jb_jameel">
          <img src="/twitter.png" alt="tiwtter icon" />
        </a>

        <a href="#">
          <img src="/insta.png" alt="instagram icon" />
        </a>

        <a href="https://www.linkedin.com/in/jamilu-jibrilla-575441211/">
          <img src="/linkedin.png" alt="linkedin icon" />
        </a>

        <a href="https://github.com/jamilu-jibrilla">
          <img src="/github.png" alt="github icon" />
        </a>
      </div>

      <div className="credit">
        <h3>Designed By Tariq Yunusa</h3>
        <h3>Developed By Jamilu Jibrilla</h3>
      </div>
    </div>
  );
};

export default Footer;
