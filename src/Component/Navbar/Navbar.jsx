import React, { useState, useRef, useEffect } from 'react';
import '../Navbar/Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleToggle = () => setMenuToggle(!menuToggle);

  // ⭐ Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuToggle(false);
  };

  // 🔁 Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuToggle(false);
      }
    };

    if (menuToggle) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuToggle]);

  // 🧠 Hide/Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? 'show' : 'hide'}`}>
      <div className="logo fade-in">
        <h2><span>J</span>a y t e c h</h2>
      </div>

      <ul
        ref={menuRef}
        className={`navbar-menu ${menuToggle ? '' : 'hide-nav'} fade-in`}
      >
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

      {menuToggle ? (
        <FaTimes onClick={handleToggle} className="toggle close-icon" />
      ) : (
        <FaBars onClick={handleToggle} className="toggle" />
      )}
    </nav>
  );
};

export default Navbar;
