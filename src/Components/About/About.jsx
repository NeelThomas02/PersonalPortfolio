import React from 'react';
import './About.css';
import { Parallax } from 'react-parallax';

const About = () => {
  return (
    <div>
      <Parallax strength={300} blur={{min: -5, max: 15}}>
    <div id='about' className='about'>
      <div>
        <h1 style={{ textDecoration: 'underline aqua' }}>About</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="card mb-3" style={{ maxWidth: '950px', width: '100%' }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Neel Thomas</h5>
                <p className="card-text">
                  "The best brains of the nation may be found on the last benches of the classroom."
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <p className="card-text">
                      <span>Date of Birth :</span> 19th February 2002
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-text">
                      <span>Address :</span> 20 Matruchhaya society b/h new era school, nizampura,
                      Vadodara, Gujarat
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                  <div className="col-md-6">
                    <p className="card-text">
                      <span>PIN :</span> 390002
                    </p>
                  </div>
                  <div className="col-md-6">
                    <p className="card-text">
                      <span>Phone :</span> 8849950258
                    </p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: '30px', textAlign: 'end' }}>
                  <div className="col-md-3">
                    <a href='https://www.linkedin.com/in/neel-thomas-621b82218/'>
                      <i className="fa-brands fa-linkedin" style={{ fontSize: '50px' }}></i>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href='https://github.com/NeelThomas19'>
                      <i className="fa-brands fa-github" style={{ fontSize: '50px' }}></i>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href='https://www.facebook.com/neel.thomas.902'>
                      <i className="fa-brands fa-facebook" style={{ fontSize: '50px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-4 d-flex align-items-center justify-content-center"
              style={{ paddingLeft: '0' }}
            >
              <img
                src="neel.jpeg"
                className="img-fluid rounded-start"
                alt="personal"
                style={{ height: '349px', objectFit: 'cover', borderRadius: '5px 0 0 5px' }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginLeft: '0px' }}>
        <div className='col-md-4'>
          <div className="flip-card" style={{ border: 'none' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="book.jpg" alt="Avatar" style={{ width: '100%', height: '280px', borderRadius: '20px' }} />
                <h2 className='imgtext'>Education</h2>
              </div>
              <div className="flip-card-back">
                <div className="row">
                  <h2>High School</h2>
                </div>
                <div className="row">
                  <h6>Bright Day School CBSE Harni, Vadodara</h6>
                </div>
                <div className="row">
                  <div className='col-6'>
                    Class X : 84%
                  </div>
                  <div className='col-6'>
                    <div className="row">
                      Class XII(PCM) : 76%
                    </div>
                    <div className="row">
                      JEE : 88.8 Percentile
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h2>University</h2>
                </div>
                <div className="row">
                  <h6>Charotar University of Science And Technology(B.Tech CSE)</h6>
                </div>
                <div className="row">
                  <h6>CGPA : 8.64</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="flip-card" style={{ border: 'none' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="skills.png" alt="Avatar" style={{ width: '100%', height: '280px', borderRadius: '20px' }} />
                <h2 className='imgtext'>Skills</h2>
              </div>
              <div className="flip-card-back" style={{ backgroundColor: 'red' }}>
                <div className="row">
                  <h2>High School</h2>
                </div>
                <div className="row">
                  <h5>Programming Languages:</h5>
                </div>
                <div className="row">
                  <h6>Basics of C, C++, Python; HTML, CSS</h6>
                </div>
                <div className="row">
                  <h5>Database:</h5>
                </div>
                <div className="row">
                  <h6>MySQL, SQL plus</h6>
                </div>
                <div className="row">
                  <h5>Logical Reasoning</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className="flip-card" style={{ border: 'none' }}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="activity.jpg" alt="Avatar" style={{ width: '100%', height: '280px', borderRadius: '20px' }} />
                <h2 className='imgtext' style={{color: 'white'}}>Extra and Co-curricular Activities</h2>
              </div>
              <div className="flip-card-back" style={{ paddingTop: '46px', backgroundColor: 'green' }}>
                <div className="row">
                  <h5>University and Department Sports Coordinator</h5>
                </div>
                <div className="row">
                  <h5>International Rated Chess player</h5>
                </div>
                <div className="row">
                  <h5>University Chess player</h5>
                </div>
                <div className="row">
                  <h5>Selected in Baroda Cricket Association(BCA) camp(2014-15)</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Parallax>
    </div>
  );
};

export default About;
