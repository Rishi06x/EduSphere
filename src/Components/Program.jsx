import './Program.css';
import programImage1 from '../assets/programImage1.png'
import programImage2 from '../assets/programImage2.png'
import programImage3 from '../assets/programImage3.png'

const Program = () => {
    return (
        <div className="container">
            <h2>Our Program</h2>
            <h4>What we Offer</h4>
            <div className="program-cards">
                  <div class="card">
                    <img src={programImage1} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Card Title</h3>
                        <p>Short description goes here.</p>
                    </div>
                </div>
                  <div class="card">
                    <img src={programImage3} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Card Title</h3>
                        <p>Short description goes here.</p>
                    </div>
                </div>
                  <div class="card">
                    <img src={programImage2} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Card Title</h3>
                        <p>Short description goes here.</p>
                    </div>
                </div>
            </div>
            <div className="facilities">
                <h2>Career Support</h2>
                <div className='facility-list'>
                    <h4>Internship opportunities</h4>
                    <h4>Industry projects</h4>
                    <h4>Career guidance & mentoring</h4>
                    <h4>Placement assistance</h4>
                </div>
            </div>
        </div>
    );
}

export default Program;