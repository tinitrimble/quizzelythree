import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import './Footerlinks.css';


class Clickhere extends Component {
  render() {
    return(
    <div className="Disclaimer">
      <Header />
      <div id="blurb">
        <p>These quizzes cannot improve your life beyond the fleeting satisfaction of knowing you just took a quiz.</p>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Clickhere;
