import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import Hero from './Component/Hero/Hero.jsx'
import About from './Component/About-me/About.jsx'
import Title from './Component/Title/Title.jsx'
import Skill from './Component/Skill/Skill.jsx'
import Portfolio from './Component/Portfolio/Portfolio.jsx'
import ScrollTop from './Component/ScrollTop/ScrollTop.jsx'  
import ProjectInquiry from './Component/ProjectInquiry/ProjectInquiry.jsx'
import Testimonial from './Component/Testimonial/Testimonial.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Footer from './Component/Footer/Footer.jsx'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <section id='about'>
        <Title title="ABOUT ME" subTitle="Meet The Developer"/>
      </section>
      <About/>

      <section id='skills'>
        <Title title="SKILLS" subTitle="What I Do"/>
      </section>
      <Skill/>

       <section id='portfolio'>
      <Title title="PORTFOLIO" subTitle="Latest Work"/>
      <Portfolio/>
      </section>
      <ProjectInquiry/>
      <Testimonial/>
      <section id="contact" className="contact-title-wrapper">
      <Title title="" subTitle="Get In Touch" />
      </section>

      <Contact/>
      <Footer/>
      
      <ScrollTop/>

    </div>
  )
}

export default App
