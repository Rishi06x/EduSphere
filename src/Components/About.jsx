import './About.css';
import Title from "./Title"
import aboutImage from '../assets/about-img.jpg'

const About = () => {
    return (
        <div className="about-section" id="about">
            <div className="about-left">
                <img src={aboutImage} alt="about-img" />
            </div>
            <div className="about-right">
                <Title title="About University" subTitle="Education beyond classrooms, preparing students for the real world."/>
                <p>At EduLearn, we are dedicated to providing top-notch education that empowers students to achieve their full potential. Our mission is to foster a learning environment that encourages innovation, critical thinking, and personal growth.</p>
                <p>With a diverse range of programs and experienced faculty, we strive to equip our students with the skills and knowledge needed to excel in their chosen fields. Join us on a journey of discovery and success!</p>
            </div>
        </div>
    )
}

export default About;