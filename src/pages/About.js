import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import '../layouts/Footerlinks.css';


class About extends Component {
  render() {
    return(
    <div className="About">
      <Header />
      <div id="Explanatorybit">
        <p>Take quizzes for no reason here.</p>
      </div>
      <Footer />
    </div>
    )
  }
}

export default About;
