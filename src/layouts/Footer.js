import React from 'react'
import footer from './Footer.css';
import { Link } from "gatsby";
import logo from '../images/q2.svg';

const Footer = () => (
  <footer className="footer">
    <div className="footerlinks">
      <Link to="About">About</Link>
      <Link to="Disclaimer">Disclaimer</Link>
      <Link to="Clickhere">Click Here</Link>
      <img src={logo} className="logo" alt="logo" />
    </div>
  </footer>
)

export default Footer;
