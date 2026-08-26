import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p>GET IN TOUCH</p>

          <h2>
            Contact <span>Me</span>
          </h2>

          <p>
            Have a project in mind or want to connect?
            Feel free to send me a message.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">✉</div>
              <div>
                <h3>Email</h3>
                <p>your-sonampatra421@gmail.com</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div>
                <h3>Phone</h3>
                <p>+91 93375 58931</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div>
                <h3>GITHUB</h3>
                <p>Sonam-patra</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <div>
                <h3>linked in</h3>
                <p>Sonam patra</p>
              </div>
            </div>
  
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Location</h3>
                <p>Odisha, India</p>
              </div>
            </div>

          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;