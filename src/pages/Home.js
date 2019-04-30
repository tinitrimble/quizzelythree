import React, { Component } from 'react';
import app from './App';
import slug from 'slug';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import quizInfo from './quiz.json';

class Home extends Component {
  static propTypes = {
    quiz: PropTypes.string.isRequired,
    quiztitle: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="all-quizzes">
        <h1>Quizzes</h1>
        {quizInfo.quiztitle.map((quiztitle) =>
          <div className="quizbox">
            <Link to={slug(quiz.title)} className="quizlink" key={quiz.id}>
              <img src={quiz.headerImage.file.url} className="headerImage"/>
              <div className="quiztitle">
                {quiz.title}
              </div>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default Home;
