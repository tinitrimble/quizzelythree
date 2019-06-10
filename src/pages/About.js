import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';


class About extends Component {
  render() {
    return(
    <div className="About">
      <Header />
      <div className="Blurb">
        <p>This website has quizzes that you can take over and over again</p>
      </div>
      <Footer />
    </div>
    )
  }
}

export default About;
