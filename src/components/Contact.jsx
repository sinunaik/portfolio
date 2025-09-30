import "./Contact.css"; // Import CSS file
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <div className="contact-container">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p><a href="mailto:your.email@example.com">sinunaik94@gmail.com</a></p>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p><a href="tel:+911234567890">+91 9620781551</a></p>
        </div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <p><a href="https://linkedin.com/in/yourusername" target="_blank">https://www.linkedin.com/in/shrinivasnaik/</a></p>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <p><a href="https://github.com/yourusername" target="_blank">https://github.com/sinunaik</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
