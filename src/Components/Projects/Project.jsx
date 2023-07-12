import React from 'react'
import { Parallax } from 'react-parallax'
import './Project.css'

const Project = () => {
  return (
    <div>
      <Parallax strength={600} bgImage='keyboard.jpg'>
        <div id='project' className='project'>
            <div className="row">
              <h1 style={{textDecoration: 'underline aqua', marginTop: '50px', marginLeft: '50px'}}>Project</h1>
            </div>
            <div className="row">
              <ul className='col-7 projnames'>
                <li>
                  CodePie 3.0(Website)
                  <p>Worked as a front-end developer for a coding event, organized annually by our university for its students. The website included features such as date fo event, rules, registration, team members, etc.</p>
                </li>
                <li>
                  SeaRay Motel(Website)
                  <p>Appointed as a front-end devloper for WizDeveloper company situated in Vadodara. Developed a website for a motel from USA and added some features like about the motel, room availabilty, policies and many more features.</p>
                </li>
                <li>
                  Gym Website
                  <p>Developed a front-end website during my internship with WizDeveloper with some basic features like on tap contact with the gym owners, registration form and such more.</p>
                </li>
                <li>
                  Personal Portfolio(Website)
                  <p>Frontend design of website that provide some of my details, my projects, certifications.</p>
                </li>
              </ul>
            </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Project