import React from 'react';
import './About.css';
import Title from "./Title";
import aboutImage from '../assets/about-img.jpg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={aboutImage} alt="University Campus" className="about-img" />
          <div className="image-accent"></div> 
        </div>
        
        <div className="about-content">
          <Title 
            title="About University" 
            subTitle="Nurturing Tomorrow's Leaders Today" 
          />
          <div className="about-text">
            <p>
              At EduLearn, we are dedicated to providing top-notch education that 
              empowers students to achieve their full potential. Our mission is to 
              foster a learning environment that encourages innovation, critical 
              thinking, and personal growth.
            </p>
            <p>
              With a diverse range of programs and experienced faculty, we strive 
              to equip our students with the skills and knowledge needed to excel 
              in their chosen fields. Join us on a journey of discovery and success!
            </p>
            <button className="about-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;