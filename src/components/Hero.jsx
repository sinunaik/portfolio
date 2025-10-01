import "./Hero.css";
import HeroImage from "../assets/my.jpg";
import ReactTyped from "react-typed";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left: Image */}
        <div className="hero-left">
          <img src={HeroImage} alt="Me" className="hero-image" />
        </div>

        {/* Right: Greeting */}
        <div className="hero-right">
          <h1 className="hero-greeting">Hi, I am</h1>
          <h2 className="hero-name">
            <ReactTyped
              strings={[
                "Shrinivas Naik",
                "a Web Developer",
                "a Python & Django Enthusiast",
                "a Data Analyst"
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h2>
          <p className="hero-text">
            Welcome to my portfolio! I enjoy building modern web apps and working with data.
          </p>
          <a href="#contact" className="hero-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
