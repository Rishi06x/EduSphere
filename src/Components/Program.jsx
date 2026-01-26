import './Program.css';
import programImage1 from '../assets/programImage1.png'
import programImage2 from '../assets/programImage2.png'
import programImage3 from '../assets/programImage3.png'
import Title from './Title';

const Program = () => {
    return (
        <div className="container" id='program'>
            <Title title="Our Programs" subTitle="Choose a program that fits your career goals"/>
            <div className="program-cards">
                  <div class="card">
                    <img src={programImage1} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Engineering</h3>
                        <p>Learn to design, build, and innovate using modern technology and engineering principles to solve real-world challenges.</p>
                    </div>
                </div>
                  <div class="card">
                    <img src={programImage3} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Medical Science</h3>
                        <p>Study the science of healthcare and the human body, preparing for careers that focus on healing, research, and medical advancement.</p>
                    </div>
                </div>
                  <div class="card">
                    <img src={programImage2} alt="Card Image"/>
                    <div class="card-content">
                        <h3>Architecture</h3>
                        <p>Explore the art and science of designing sustainable, functional, and visually inspiring buildings and spaces.</p>
                    </div>
                </div>
            </div>
            <div className="facilities">
                <Title title="Career Support"/>
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