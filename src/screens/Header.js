import React from 'react'
import './Header.css'
const header = () => {
  return (
    <div>
      <header className="headerr">
        <a href="" className="logo">Blockchain</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
        <ul className="menu">
          <li><a href="#next">About</a></li>
          <link to="/about"></link>
          <li><a href="#converter">Currency Converter</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </header>
    </div>
  )
}

export default header