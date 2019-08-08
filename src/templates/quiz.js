import { graphql } from "gatsby"
import React, { Component } from "react"
import Header from "../layouts/Header.js"
import Introquiz from "../quiztemplate/Introquiz.js"
import Question from "../quiztemplate/Question.js"
import styled from 'styled-components'
import { PageHeader } from '../pages'
import Results from "../quiztemplate/Results.js"

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
          score={this.getCorrectAnswerCount()}
          headline={this.quiz.results[resultNumber].headline}
          resultpic={this.quiz.results[resultNumber].resultpic}
          summary={this.quiz.results[resultNumber].summary}
        />
      )
    }
  }
  render() {
    const isQuizIntro = this.state.showIntro
    return (
      <Quiz.Container>
        <Header />
        {isQuizIntro ? (
            <Introquiz
              quiztitle={this.quiz.quizheadline.quiztitle}
              intropic={this.quiz.quizheadline.intropic}
              quizsummary={this.quiz.quizheadline.quizsummary}
              onClick={this.handleQuizStart}
            />
        ) : (
          <Quiz.Display>
            <PageHeader>
              {this.quiz.quizheadline.quiztitle}
            </PageHeader>
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
          </Quiz.Display>
        )}
        {this.getResults()}
      </Quiz.Container>
    )
  }
}

Quiz.Container = styled.div`
  background-color: #white;
`

Quiz.Display = styled.div`
  display: flex;
  text-align: center;
  flex-flow: column wrap;
  justify-content: center;
`

Quiz.Title = styled.h1`
  font-size: 34px;
  margin-top: 42px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;
  color: #002921;
`


export default Quiz
