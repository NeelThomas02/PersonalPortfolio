import React from 'react'
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
      <div>
        <h1>About</h1>
      </div>
      <div className="d-flex justify-content-center">
      <div class="card mb-3" style={{maxWidth: '950px', height: '350px', width: '750px'}}>
        <div class="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Neel Thomas</h5>
            <p class="card-text">"The best brains of the nation may be found on the last benches of the classroom."</p>
            <div className="row">
            <div className='col-md-6'>
            <p class="card-text"><span>Date of Birth :</span> 19th February 2002</p>
            </div>
            <div className='col-md-6'>
            <p class="card-text"><span>Address :</span> 20 Matruchhaya society b/h new era school, nizampura, Vadodara, Gujarat</p>
            </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
            <div className='col-md-6'>
            <p class="card-text"><span>PIN :</span> 390002</p>
            </div>
            <div className='col-md-6'>
            <p class="card-text"><span>Phone :</span> 8849950258</p>
            </div>
            </div>
            <div className="row" style={{marginTop: '30px'}}>
            <div className='col-md-3'>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='col-md-3'>
            <i class="fa-brands fa-github"></i>
            </div>
            <div className='col-md-3'>
            <i class="fa-brands fa-facebook"></i>
            </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 d-flex align-items-center justify-content-center">
            <img src="neel.jpeg" class="img-fluid rounded-start" alt="personal" style={{ height: '349px', objectFit: 'cover', marginRight: '-52px', borderRadius: '0 5px 5px 0'}} />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About