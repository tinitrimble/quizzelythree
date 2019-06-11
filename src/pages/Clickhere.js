import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import './Footerlinks.css';
import manifest from './quiz-manifest.json';
import PropTypes from 'prop-types';

class Clickhere extends Component {
  render() {
    return(
    <div className="Clickhere">
      <Header />
      <div id="blurb">
        <p>{manifest.quizzes.map(quiz => (
          <h1>{quiz.quiztitle}</h1>
        ))}</p>
        <div class="boxtest">
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Clickhere;
