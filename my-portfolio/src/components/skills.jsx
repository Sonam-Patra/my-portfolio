import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "90%",
    },
    {
      name: "CSS",
      level: "85%",
    },
    {
      name: "JavaScript",
      level: "75%",
    },
    {
      name: "React",
      level: "70%",
    },
    {
      name: "Java",
      level: "65%",
    },
    {
      name: "MySQL",
      level: "70%",
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p>MY SKILLS</p>

          <h2>
            My <span>Skills</span>
          </h2>

          <p className="skills-description">
            Here are some of the technologies and skills I am
            learning and working with.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;