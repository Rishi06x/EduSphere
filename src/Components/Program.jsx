import React from 'react';
import './Program.css';
import programImage1 from '../assets/programImage1.png';
import programImage2 from '../assets/programImage2.png';
import programImage3 from '../assets/programImage3.png';
import Title from './Title';

const PROGRAMS_DATA = [
  {
    id: 1,
    image: programImage1,
    title: 'Engineering',
    desc: 'Learn to design, build, and innovate using modern technology and engineering principles to solve real-world challenges.'
  },
  {
    id: 2,
    image: programImage3,
    title: 'Medical Science',
    desc: 'Study the science of healthcare and the human body, preparing for careers that focus on healing, research, and medical advancement.'
  },
  {
    id: 3,
    image: programImage2,
    title: 'Architecture',
    desc: 'Explore the art and science of designing sustainable, functional, and visually inspiring buildings and spaces.'
  }
];

const SUPPORT_ITEMS = [
  "Internship opportunities",
  "Industry projects",
  "Career guidance & mentoring",
  "Placement assistance"
];

const Program = () => {
  return (
    <section className="program-section" id="program">
      <div className="container">
        <Title 
          title="Our Programs" 
          subTitle="Choose a program that fits your career goals" 
        />
        
        <div className="program-grid">
          {PROGRAMS_DATA.map((item) => (
            <div className="program-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="card-overlay">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="career-support">
          <Title title="Career Support" />
          <ul className="support-list">
            {SUPPORT_ITEMS.map((text, index) => (
              <li key={index} className="support-tag">
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;