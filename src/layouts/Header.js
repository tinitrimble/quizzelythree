import React from 'react'
import Link from 'gatsby-link';
import logo from '../images/q2.svg';
import './Header.css';

const Header = () => (
  <header className="global" ui-view="header" autoscroll="true">
    <img src={logo} className="logo" alt="logo" />
    <Link to="/" className="page-name">Quizzelydoo</Link>
    <input type="text" name="search" placeholder="Search" className="searchbar" >
    </input>
  </header>
)

export default Header;
