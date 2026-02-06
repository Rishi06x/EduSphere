import React, { useRef } from "react";
import "./Testimonial.css";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow (1).png";
import Title from "./Title";

const TESTIMONIALS = [
  { id: 1, name: "Alex Johnson", role: "Software Engineer", text: "EduLearn has transformed my learning experience. The courses are well-structured, and the instructors are knowledgeable.", image: "https://i.pravatar.cc/150?u=1" },
  { id: 2, name: "Sarah Williams", role: "Data Analyst", text: "The flexibility of learning at my own pace with EduLearn has been a game-changer for my career transition.", image: "https://i.pravatar.cc/150?u=2" },
  { id: 3, name: "Michael Chen", role: "UX Designer", text: "The supportive community and user-friendly interface make learning complex design principles truly enjoyable.", image: "https://i.pravatar.cc/150?u=3" },
  { id: 4, name: "Emily Davis", role: "Marketing Specialist", text: "The marketing modules provided me with practical tools that I was able to implement in my job immediately.", image: "https://i.pravatar.cc/150?u=4" },
  // Add more here...
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    const { current } = sliderRef;
    const scrollAmount = current.offsetWidth;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <Title title="Testimonials" subTitle="What Our Students Say" />
        
        <div className="slider-wrapper">
          <button className="nav-btn prev" onClick={() => handleScroll('left')} aria-label="Previous">
            <img src={leftArrow} alt="" />
          </button>
          
          <button className="nav-btn next" onClick={() => handleScroll('right')} aria-label="Next">
            <img src={rightArrow} alt="" />
          </button>

          <div className="testimonial-slider" ref={sliderRef}>
            {TESTIMONIALS.map((item) => (
              <div className="testimonial-card" key={item.id}>
                <div className="user-info">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.role}</span>
                  </div>
                </div>
                <p>"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;