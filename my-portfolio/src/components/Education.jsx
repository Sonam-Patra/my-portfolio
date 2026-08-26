import "./Education.css";

function Education() {
  const education = [
    {
      year: "2024 - Present",
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Sparsh College / Berhumpur University",
      description:
        "Currently pursuing BCA and learning programming, web development, database management and modern technologies.",
    },
    {
      year: "2023 - 2024",
      degree: "Higher Secondary Education",
      institute: "Ankalika science higher secondary school",
      description:
        "Completed higher secondary education with a focus on building a strong academic foundation.",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">

        <div className="education-heading">
          <p>MY JOURNEY</p>

          <h2>
            My <span>Education</span>
          </h2>

          <p>
            My academic journey and the knowledge I have gained
            along the way.
          </p>
        </div>

        <div className="education-list">
          {education.map((item, index) => (
            <div className="education-card" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <h3>{item.degree}</h3>

                <h4>{item.institute}</h4>

                <p>{item.description}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;