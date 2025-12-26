import React, { useRef, useEffect } from "react";
import "./Testimonial.css";

import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";

import pic1 from "../../assets/profilePic-1.jpg";
import pic2 from "../../assets/profilePic-2.jpg";
import pic3 from "../../assets/profilePic-3.jpg";
import pic4 from "../../assets/profilePic-4.jpg";
import pic5 from "../../assets/profilePic-5.jpg";

const testimonials = [
  {
    img: pic1,
    name: "Catalina",
    feedback:
      "Amazing work! My leads doubled after the website upgrade. Clean, fast, and beautifully designed."
  },
  {
    img: pic2,
    name: "Michael Watt",
    feedback:
      "Your attention to detail is insane. You turned my designs into a flawless, responsive UI."
  },
  {
    img: pic3,
    name: "Marilyn Dee",
    feedback:
      "You made my app feel premium. Smooth UI, perfect animations, and delivered ahead of time."
  },
  {
    img: pic4,
    name: "John Davis",
    feedback:
      "You built more than a website, you built my brand. Clean, bold, and incredibly fast."
  },
  {
    img: pic5,
    name: "David Kim",
    feedback:
      "As a developer, I'm picky, but your work impressed me. Clean code and perfect performance."
  }
];

function Testimonial() {
  const slider = useRef(null);

  const slideLeft = () => {
    slider.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const slideRight = () => {
    slider.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  // Auto-scroll (no loop)
  useEffect(() => {
    const interval = setInterval(() => {
      const sliderEl = slider.current;
      if (!sliderEl) return;

      const maxScroll = sliderEl.scrollWidth - sliderEl.clientWidth;

      if (sliderEl.scrollLeft >= maxScroll) {
        sliderEl.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        sliderEl.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <h2 className="section-title">Our Customer Feedback</h2>
      <p className="section-subtitle">
        Feedback that reflects the quality and passion behind every project.
      </p>

      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={slideLeft}>
          <FaChevronLeft />
        </button>

        <div className="testimonial-slider" ref={slider}>
          {testimonials.map((item, i) => (
            <div className="testimonial-card" key={i}>
              <img src={item.img} className="profile-img" alt={item.name} />

              <h3 className="name">{item.name}</h3>

              {/* ⭐ Pink Stars Added */}
              <div className="stars">
                {[1, 2, 3, 4, 5].map((s) => (
                  <FaStar key={s} className="star-icon" />
                ))}
              </div>

              <FaQuoteLeft className="quote-icon" />
              <p className="feedback">{item.feedback}</p>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={slideRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Testimonial;
