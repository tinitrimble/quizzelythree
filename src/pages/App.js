import React, { Component } from 'react';
import Header from '../layouts/Header.js';
import Footer from '../layouts/Footer.js';
import Introquiz from '../quiztemplate/Introquiz.js';
import Counter from '../quiztemplate/Counter.js';
import Question from '../quiztemplate/Question.js';
import './App.css';
import quizInfo from '../data/howwellbeatles.json';
import Results from '../quiztemplate/Results.js';

class App extends Component {
  constructor() {
    super ();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    this.handleQuizStart = this.handleQuizStart.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
      showIntro: true
    })
  }
  handleQuizStart() {
    this.setState({ showIntro: false })
  }
  handleAnswerSelected(answer, questionNumber) {
    const updatedUserAnswers = this.state.userAnswers.slice();
    updatedUserAnswers[questionNumber] = answer
    this.setState({
      userAnswers: updatedUserAnswers
    });
  }
  getCorrectAnswerCount() {
    return this.state.userAnswers
      .filter(answer => answer.correct)
      .length;
  }
  getResults() {
    const totalQuestions = quizInfo.questions.length;
    const totalAnswered = this.state.userAnswers.length;
    if ( totalAnswered === totalQuestions ) {
      const score = this.getCorrectAnswerCount() / totalQuestions;
      const resultNumber = Math.round((quizInfo.results.length - 1) * score);
      return <Results
        headline={quizInfo.results[resultNumber].headline}
        resultpic={quizInfo.results[resultNumber].resultpic}
        summary={quizInfo.results[resultNumber].summary} />
    }
  }
  render() {
    const isQuizIntro = this.state.showIntro;
    return (
      <div className="App">
        <Header />
        {isQuizIntro ? (
          <div className="Introduction">
            <Introquiz
              quiztitle={quizInfo.quizheadline.quiztitle}
              intropic={quizInfo.quizheadline.intropic}
              quizsummary={quizInfo.quizheadline.quizsummary}
              onClick={this.handleQuizStart}/>
          </div>
        ) : (
          <div className="Quiz-Display">
            <h1 className ="Quiz-name">{quizInfo.quizheadline.quiztitle}</h1>
            <Counter
              totalscore={this.getCorrectAnswerCount()} 
              className="counterpos" />
            {quizInfo.questions.map((question, index) =>
              <Question
                key={index}
                questionNumber={index}
                text={question.text}
                picture={question.picture}
                answers={question.answers}
                onClick={this.handleAnswerSelected}
                userAnswer={this.state.userAnswers[index]}/>
            )}
          </div>
        )}
        {this.getResults()}
          <Footer />
      </div>
    )
  }
}

export default App;
