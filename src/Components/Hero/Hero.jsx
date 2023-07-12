import React from 'react';
import { Parallax } from 'react-parallax';
import './Hero.css';

const Hero = () => {
  return (
    <div className='home'>
      <Parallax strength={600} bgImage='chess-1215079_1280.jpg'>
        <div id='home' className='content'>
          <div className='text-content'>
            <h3>Neel Thomas</h3>
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Hero