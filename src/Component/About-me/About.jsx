import React from "react";
import "./About.css";
import myPic from "../../assets/my-image.jpeg"; // replace with your image
import cvFile from "../../assets/Feranmi-Oyediran-CV.pdf";


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side: Image */}
        <div className="about-left">
          <div className="image-wrapper">
            <div className="image-border-black"></div>
            <div className="image-frame">
              <img src={myPic} alt="Feranmi Oyediran" />
              <div className="experience-box">
                <h2>6</h2>
                <p>
                  Years<br />Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="about-right">
          <h2 className="about-heading">Introduction About Me</h2>
          <p className="about-intro">
            Passionate frontend developer who loves building fast, user-friendly
            interfaces with clean, responsive design.
          </p>

          <div className="about-details">
            <ul>
              <li><strong>Birthday:</strong> 16 July 1998</li>
              <li><strong>Phone:</strong> +234 810 950 0453</li>
              <li><strong>City:</strong> Ibadan, Nigeria</li>
              <li><strong>Age:</strong> 27</li>
              <li><strong>Degree:</strong> Bachelor of Arts</li>
              <li><strong>Freelance:</strong> Available</li>
            </ul>
          </div>

          <p className="about-summary">
            Every pixel I push is backed by logic, creativity, and attention to
            user experience. I aim to create interfaces that feel as good as they
            look. Every component I build is tested for clarity, speed, and
            purpose.
          </p>

          <div className="about-buttons">
            <a
            href="mailto:oyediranjay@gmail.com?subject=Hiring%20Inquiry&body=Hello%20Jay,"
            className="btn hire"
          >
            Hire Me
          </a>

        <a href={cvFile} download target="_blank" rel="noopener noreferrer" className="btn download">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
