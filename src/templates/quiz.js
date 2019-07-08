import { graphql } from "gatsby"
import React, { Component } from "react"
import Header from "../layouts/header.js"
import Footer from "../layouts/footer.js"
import Introquiz from "../quiztemplate/introquiz.js"
import Counter from "../quiztemplate/counter.js"
import Question from "../quiztemplate/question.js"
import "./quiz.css"
import Results from "../quiztemplate/results.js"

export const query = graphql`
  query($slug: String!) {
    dataJson(slug: { eq: $slug }) {
      id
      questions {
        text
        picture
        answers {
          option
          correct
        }
      }
      results {
        headline
        resultpic
        summary
      }
      quizheadline {
        quiztitle
        intropic
        quizsummary
      }
    }
  }
`

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.quiz = this.props.data.dataJson
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
    this.handleQuizStart = this.handleQuizStart.bind(this)
  }
  componentWillMount() {
    this.setState({
      correctAnswers: 0,
      userAnswers: [],
      showIntro: true,
    })
  }
  handleQuizStart() {
    this.setState({ showIntro: false })
  }
  handleAnswerSelected(answer, questionNumber) {
    const updatedUserAnswers = this.state.userAnswers.slice()
    updatedUserAnswers[questionNumber] = answer
    this.setState({
      userAnswers: updatedUserAnswers,
    })
  }
  getCorrectAnswerCount() {
    return this.state.userAnswers.filter(answer => answer.correct).length
  }
  getResults() {
    const totalQuestions = this.quiz.questions.length
    const totalAnswered = this.state.userAnswers.length
    if (totalAnswered === totalQuestions) {
      const score = this.getCorrectAnswerCount() / totalQuestions
      const resultNumber = Math.round((this.quiz.results.length - 1) * score)
      return (
        <Results
          headline={this.quiz.results[resultNumber].headline}
          resultpic={this.quiz.results[resultNumber].resultpic}
          summary={this.quiz.results[resultNumber].summary}
        />
      )
    }
  }
  render() {
    const isQuizIntro = this.state.showIntro
    console.log(this.quiz)
    return (
      <div className="App">
        <Header />
        {isQuizIntro ? (
          <div className="Introduction">
            <Introquiz
              quiztitle={this.quiz.quizheadline.quiztitle}
              intropic={this.quiz.quizheadline.intropic}
              quizsummary={this.quiz.quizheadline.quizsummary}
              onClick={this.handleQuizStart}
            />
          </div>
        ) : (
          <div className="Quiz-Display">
            <h1 className="Quiz-name">{this.quiz.quizheadline.quiztitle}</h1>
            <Counter
              totalscore={this.getCorrectAnswerCount()}
              className="counterpos"
            />
            {this.quiz.questions.map((question, index) => (
              <Question
                key={index}
                questionNumber={index}
                text={question.text}
                picture={question.picture}
                answers={question.answers}
                onClick={this.handleAnswerSelected}
                userAnswer={this.state.userAnswers[index]}
              />
            ))}
          </div>
        )}
        {this.getResults()}
        <Footer />
      </div>
    )
  }
}

export default Quiz
