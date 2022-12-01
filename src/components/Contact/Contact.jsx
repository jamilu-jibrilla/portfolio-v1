import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h2 className="contact_text">Contact Me</h2>
      <h3 className="contact_text2">You have something in mind?</h3>
      <p className="contact_para">
        Reach out to me with that next idea of yours lets build something worth
        while.
      </p>
      <a href="mailto:jamilujibrilla01@gmail.com">
        <button className="say_hi">Say Hi</button>
      </a>
    </div>
  );
};

export default Contact;
