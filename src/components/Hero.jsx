import "./Hero.css";
import HeroImage from "../assets/my.jpg"; // Your image

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {}
        <div className="hero-left">
          <img src={HeroImage} alt="Me" className="hero-image" />
        </div>

        {/* Right: Greeting */}
        <div className="hero-right">
          <h1 className="hero-greeting">Hi, I am Shrinivas Naik</h1>
          <p className="hero-text">
            Welcome to my portfolio! I am a developer passionate about creating modern web applications.
          </p>
          {/* Optional: Add a button */}
          <a href="#contact" className="hero-btn">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
