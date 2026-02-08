import './Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect (() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setSticky (true);
            } else {
                setSticky (false);
            }
         });
    },[]);

  return (
    <nav className={`navbar ${isOpen ? "open" : "close"} ${sticky ? "dark-nav" : ""}`}>
        <div id="logo">
            <h3><span>Edu</span><span>Learn</span></h3>
        </div>
        <div id="navLinks" className={`${isOpen ? "open" : ""}`}>
            <a href="#home">Home</a>
            <a href="#program">Program</a>
            <a href="#about">About Us</a>
            <a href="#campus">Campus</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" id='btn'>Contact Us</a>
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