import { useEffect, useState } from "react";
import "./Hero.css";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hello">Hello, I'm</p>

        <h1>
          Sonam<span>.</span>
        </h1>

        <h2>
          <span className="role">{roles[roleIndex]}</span>
        </h2>

        <p className="hero-text">
          I create modern, responsive and user-friendly web experiences
          with creativity and technology.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Work
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-glow"></div>

        <div className="image-box">
          <img src="/images/sonam.jpg.jpeg" alt="Sonam" />
        </div>
      </div>
    </section>
  );
}

export default Hero;