import React from 'react'
import footer from './Footer.css';
import { Link } from "gatsby";
import logo from '../images/q2.svg';
import About from '../pages/About.js';

const Footer = () => (
  <footer className="footer">
    <div className="footerlinks">
      <Link to="About">About</Link>
      <a href="www.quizzelydoo.com/Disclaimer">Disclaimer</a>
      <a href="www.quizzelydoo.com/about">Click Here</a>
      <img src={logo} className="logo" alt="logo" />
    </div>
  </footer>
)

export default Footer;
