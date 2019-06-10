import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import './Footerlinks.css';
import quizinformation from './quiz-manifest.json';

class Clickhere extends Component {
  render() {
    const quizzes = [];
    return(
    <div className="Clickhere">
      <Header />
      <div id="blurb">
        <p>{quizinformation.quiztitle.forEach(function (quiztitle) {
      quizinformation.quizzes.push(quiztitle)})}</p>
        <div class="boxtest">
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}

export default Clickhere;
