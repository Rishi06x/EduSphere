import React from "react";
import "./Campus.css";
import campusImage1 from "../assets/campus_image1.webp";
import campusImage2 from "../assets/campus_image2.jpg";
import campusImage3 from "../assets/campus_image3.jpeg";
import campusImage4 from "../assets/campus_image4.jpeg";
import Title from "./Title";

const Campus = () => {
  const facilities = [
    { img: campusImage1, title: "Computer Labs", desc: "High-end systems with latest software" },
    { img: campusImage2, title: "Library", desc: "Digital & physical resources" },
    { img: campusImage3, title: "Hostel", desc: "Comfortable & secure living" },
    { img: campusImage4, title: "Sports", desc: "Indoor and outdoor facilities" },
  ];

  return (
    <section className="campus" id="campus">
      <div className="container">
        <Title title="Our Campus" subTitle="Explore Our Beautiful Campus" />
        
        <div className="campus-grid">
          {facilities.map((item, index) => (
            <div className="campus-item" key={index}>
              <div className="image-wrapper">
                <img src={item.img} alt={item.title} />
                <div className="image-overlay">
                   <span>View Details</span>
                </div>
              </div>
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-secondary">See more photos here</button>
        
      </div>
    </section>
  );
};

export default Campus;