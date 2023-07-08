import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='image' src='N (2).png' alt='loading'></img>

      <input type="checkbox" id='menu-bar' />
      <label htmlFor="menu-bar"><i class="fa-solid fa-bars"></i></label>

      <ul className='nav'>
        <li><a href='#home'><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href='#about'><i class="fa-solid fa-user-tie"></i>About</a></li>
        <li><a href='#project'><i class="fa-solid fa-laptop-code"></i>Projects</a></li>
        <li><a href='#certification'><i class="fa-solid fa-certificate"></i>Certifications</a></li>
        <li><a href='#contact'><i class="fa-solid fa-address-card"></i>Contact</a>
          <ul>
            <li><a href='tel:8849950258'><i class="fa-solid fa-phone"></i>Mobile</a></li>
            <li><a href='mailto:neelthomas.19@gmail.com'><i class="fa-solid fa-envelope"></i>Mail</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Navbar