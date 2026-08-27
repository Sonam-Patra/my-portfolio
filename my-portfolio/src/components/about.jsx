import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* About Image */}
        <div className="about-image">
          <div className="about-image-box">
            <img src="/images/sona.jpg" alt="Sona" />
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <p className="section-subtitle">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <p>
            Hi! I'm Sonam, a passionate and creative web developer.
            I enjoy creating modern, responsive and user-friendly
            websites with creativity and technology.
          </p>

          <p>
            I am continuously learning and improving my skills in
            frontend and backend development. My goal is to become
            a successful Full Stack Developer.
          </p>

          {/* Personal Information */}
          <div className="about-info">
            <div>
              <span>Name</span>
              <p>Sonam</p>
            </div>

            <div>
              <span>Role</span>
              <p>Web Developer</p>
            </div>

            <div>
              <span>Education</span>
              <p>BCA</p>
            </div>

            <div>
              <span>Location</span>
              <p>Odisha, India</p>
            </div>
          </div>

          <a href="#contact" className="about-btn">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;