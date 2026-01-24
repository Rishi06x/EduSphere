import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar ${isOpen ? "open" : "close"}`}>
        <div id="logo">
            <img src="#" alt="logo" />
        </div>
        <div id="navLinks" className={`${isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#about">Program</a>
            <a href="#services">Campus</a>
            <a href="#contact">About Us</a>
            <a href="#contact">Testimonials</a>
            <button>Contact Us</button>
        </div>
        <div className='hamburger-icon' onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>

    );
}

export default Navbar;