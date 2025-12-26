import React from "react";
import "./ProjectInquiry.css";
// your background

function ProjectInquiry() {
  return (
    <section
      className="project-inquiry"

    >
      <div className="project-left">
        <h2>Have Any Project On Mind</h2>

        <p>
          I'm always open to discussing new ideas, collaborations, or fresh
          opportunities. Let’s turn your vision into a high-quality digital
          experience built with clean, modern frontend development.
        </p>

        <div className="project-btn"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
        </div>
      </div>
    </section>
  );
}

export default ProjectInquiry;
