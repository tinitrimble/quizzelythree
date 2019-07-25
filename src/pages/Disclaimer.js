import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import '../layouts/Footerlinks.css';


class Disclaimer extends Component {
  render() {
    return(
    <div className="Disclaimer">
      <Header />
      <div id="Explanatorybit">
        <p>These quizzes mean nothing.</p>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Disclaimer;
