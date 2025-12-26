import React, { useState, useEffect } from "react";
import "./ScrollTop.css";
import { FiChevronsUp } from "react-icons/fi";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-top-btn ${visible ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiChevronsUp />
    </div>
  );
}

export default ScrollTop;
