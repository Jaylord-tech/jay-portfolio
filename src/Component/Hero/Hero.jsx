import React from "react";
import '../Hero/Hero.css';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { Parallax } from 'react-scroll-parallax'; // 👈 import Parallax
import whatsapp from '../../assets/whatsapp.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import FadeSlide from "../Fade-slide/fade-slide";

const Hero = () => {
  return (
    <div className="hero" id="home">
      {/* 👇 Parallax background image */}
      <Parallax speed={-20}>  {/* negative = moves slower than scroll */}
        <div className="hero-bg"></div>
      </Parallax>

      <div className="hero-container">
        <div className="hero-content">
          <FadeSlide direction="fade-left" delay={800}>
            <h1 className="heading">Hi, I’m JOHN</h1>
          </FadeSlide>

          <FadeSlide direction="fade-right" delay={800}>
            <h1
              className="subheading"
              style={{
                color: '#00BFFF',
                fontWeight: 'lighter',
                fontSize: '40px',
                animationDelay: '1.2s'
              }}
            >
              <Typewriter
                words={[
                  'WEB DEVELOPER',
                  'FRONTEND ENGINEER',
                  'REACTjs DEVELOPER',
                  'NEXTjs DEVELOPER'
                ]}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
          </FadeSlide>

          <FadeSlide direction="fade-left" delay={1200}>
           <div className="in-touch">
             <button className="btn"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get In Touch
            </button>
             </div>
          </FadeSlide>

          <FadeSlide direction="fade-right" delay={1200}>
            <div className="social">
              <div className="social-container">
                <a href="https://wa.me/2348109500453?"
                target="blank"
                rel="noopener noreferrer">
                  <img src={whatsapp} alt="whatsapp" />
                </a>
                <p className="social-name">Whatsapp</p>
              </div>

              <div className="social-container">
                <a
                  href="https://www.linkedin.com/in/feranmi-oyediran/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin" />
                </a>
                <p className="social-name">Linkedin</p>
              </div>

              <div className="social-container">
                <a
                  href="https://github.com/Jaylord-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="github"
                    style={{ background: "#FFF", borderRadius: "40px" }}
                  />
                </a>
                <p className="social-name">Github</p>
              </div>
            </div>
          </FadeSlide>
        </div>
      </div>

      {/* 👇 U-Shaped blue curve */}
      <div className="hero-wave">


      </div>
    </div>
  );
};

export default Hero;
