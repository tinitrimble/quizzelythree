import React from 'react'
import footer from './Footer.css';
import logo from '../images/q2.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footerlinks">
      <a href="www.quizzelydoo.com/about">About</a>
      <a href="www.quizzelydoo.com/Disclaimer">Disclaimer</a>
      <a href="www.quizzelydoo.com/about">Click Here</a>
      <img src={logo} className="logo" alt="logo" />
    </div>
  </footer>
)

export default Footer;
