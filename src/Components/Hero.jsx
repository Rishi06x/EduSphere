import './Hero.css';
import image from '../assets/background.webp';
import rightArrow from '../assets/right-arrow.png'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className="overlay"></div>
            <div className="image-container">
                <img src={image} alt="hero" className="hero-img" />
            </div>
            <div className="hero-content">
                <h1>We Ensure better education for a better world</h1>
                <h4>Our cutting edge  curriculum is designed to empower students with the knowledge, skills and experience needed to excel in the dynamic field of education </h4>
                <button>Explore Now <img src={rightArrow} alt="right arrow" id='rightArrow'/></button>
            </div>
        </div>
    );
}

export default Hero;