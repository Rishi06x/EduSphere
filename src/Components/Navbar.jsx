import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div id="logo">
            <img src="#" alt="logo" />
        </div>
        <div id="navLinks">
            <a href="#home">Home</a>
            <a href="#about">Program</a>
            <a href="#services">Campus</a>
            <a href="#contact">About Us</a>
            <a href="#contact">Testimonials</a>
            <button>Contact Us</button>
        </div>
    </nav>

    );
}

export default Navbar;