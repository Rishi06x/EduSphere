import { useRef } from "react";
import "./Testimonial.css";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow (1).png";
import Title from "./Title";


const Testimonial = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const scrollRight = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  return (
    <div className="testimonial-container" id="testimonials">
      <Title title="Testimonials" subTitle="What student says?"/>
      <img
        src={leftArrow}
        alt="left_arrow"
        className="leftArrow"
        onClick={scrollLeft}
      />

      <img
        src={rightArrow}
        alt="right_arrow"
        className="rightArrow"
        onClick={scrollRight}
      />

      <div className="testimonial-carousel" ref={carouselRef}>
        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile1" />
            <span className="TestimonialCard-content">
              <h3>- Alex Johnson</h3>
              <h4>Software Engineer</h4>
            </span>
          </div>
          <p>
            "EduLearn has transformed my learning experience. The courses are
            well-structured, and the instructors are incredibly knowledgeable."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
           <img src="#" alt="profile2" />
            <span className="TestimonialCard-content">
              <h3>- Sarah Williams</h3>
              <h4>Data Analyst</h4>
            </span>
          </div>
          <p>
            "The flexibility of learning at my own pace with EduLearn has been a
            game-changer for my career transition."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile3" />
            <span className="TestimonialCard-content">
              <h3>- Michael Chen</h3>
              <h4>UX Designer</h4>
            </span>
          </div>
          <p>
            "The supportive community and user-friendly interface make learning
            complex design principles truly enjoyable."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile4" />
            <span className="TestimonialCard-content">
              <h3>- Emily Davis</h3>
              <h4>Marketing Specialist</h4>
            </span>
          </div>
          <p>
            "The marketing modules provided me with practical tools that I was 
            able to implement in my current job immediately."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile5" />
            <span className="TestimonialCard-content">
              <h3>- David Miller</h3>
              <h4>Web Developer</h4>
            </span>
          </div>
          <p>
            "I loved the hands-on coding challenges. They helped me build a 
            strong portfolio that landed me several interviews."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile6" />
           <span className="TestimonialCard-content">
              <h3>- Sophia Rodriguez</h3>
              <h4>Product Manager</h4>
            </span>
          </div>
          <p>
            "The leadership and management tracks are top-notch. I feel much 
            more confident leading my cross-functional teams now."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile7" />
           <span className="TestimonialCard-content">
              <h3>- James Wilson</h3>
              <h4>Cybersecurity Student</h4>
            </span>
          </div>
          <p>
            "The depth of the technical content is impressive. It covers everything 
            from basic networking to advanced ethical hacking."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile8" />
           <span className="TestimonialCard-content">
              <h3>- Linda Thompson</h3>
              <h4>Entrepreneur</h4>
            </span>
          </div>
          <p>
            "As a business owner, the financial management course was invaluable. 
            It helped me streamline my operations significantly."
          </p>
        </div>

        <div className="testimonial-card">
          <div className="card-section">
            <img src="#" alt="profile9" />
           <span className="TestimonialCard-content">
              <h3>- Robert Brown</h3>
              <h4>Mobile Developer</h4>
            </span>
          </div>
          <p>
            "Real-world projects helped me gain practical skills that boosted my
            career and helped me master React Native."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;