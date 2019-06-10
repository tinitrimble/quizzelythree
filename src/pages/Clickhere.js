import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import './Footerlinks.css';


class Clickhere extends Component {
  render() {
    return(
    <div className="Clickhere">
      <Header />
      <div id="blurb">
        <p>You clicked here!</p>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Clickhere;
