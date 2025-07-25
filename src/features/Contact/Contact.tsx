import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-description">
        I'd love to hear about your project or opportunity. Feel free to reach
        out using the form or email below.
      </p>

      <div className="contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message here"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <h4>
            <MdOutlineEmail />
            Email
          </h4>
          <p>project.manager@example.com</p>

          <h4>
            {" "}
            <FaLinkedin />
            LinkedIn
          </h4>

          <p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/projectmanager
            </a>
          </p>

          <h4>
            <FaLocationDot />
            Location
          </h4>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
