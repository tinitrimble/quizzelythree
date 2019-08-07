import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import classNames from 'classnames'

class Question extends Component {
   static propTypes = {
    text: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })),
    onClick: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
    userAnswer: PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool
    })
  }
  // getQuestionClassName() {
    // return classNames({
      // question: true,
      // rightAnswer: this.props.userAnswer && (this.props.userAnswer.correct === true),
      // wrongAnswer: this.props.userAnswer && (this.props.userAnswer.correct === false),
      // answered: this.props.userAnswer
    // });
  // }
  // getButtonClassName(answer) {
    // const classes = { choice: true };
    // if (this.props.userAnswer && this.props.userAnswer.option === answer.option) {
      // if (this.props.userAnswer.correct) {
        // classes.rightAnswer = true;
      // } else {
        // classes.wrongAnswer = true;
      // }
    // }
    // if (!!this.props.userAnswer) {
      // classes.answered = true;
     // } else {
       // classes.answered = false;
     // }
    // return classNames(classes);
  // }
  render() {
    return (
      <Question.GetCorrect>
        <Question.Question>{this.props.text}</Question.Question>
        <Question.PicContainer>
          <Question.Pic src={this.props.picture} alt="" />
        </Question.PicContainer>
        <Question.PossibleChoices>
          {this.props.answers.map((answer, index) =>
            <Question.Button
              key={index}
              onClick={() => this.props.onClick(answer, this.props.questionNumber)}
              disabled={!!this.props.userAnswer}>
              {answer.option}
            </Question.Button>
          )}
        </Question.PossibleChoices>
      </Question.GetCorrect>
    );
  }
}

Question.GetCorrect = styled.div`
  box-shadow: 0 3px 6px 0 #bacdc5;
  border-radius: 5px;
  width: 80%;
  align-self: center;
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  color: #3e4a48;
`
Question.Question = styled.h3`
  font-size: 20px;
  color: #3e4a48;
  display: flex;
  align-self: center;
  align-items: flex-start;
`

Question.PicContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  align-items: flex-start;
`

Question.Pic = styled.img`
  border-radius: 10px;
  max-height: 200px;
  padding: 6px;
`

Question.PossibleChoices = styled.div`
  border-radius: 2px; 
  box-shadow: none;
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
`

Question.Button = styled.button`
  text-align: center;
  margin: 5px;
  width: 200px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #bacdc5;
  background-color: #fff;
  &:hover {
    box-shadow: 1px 1px 1px 1px #dce6e5;
  }
  &:disabled {
    background-color: #bacdc5;
    color: #fafffc;
    border: 1px solid #bacdc5;
   }
`
    // background-color: ${({ userAnswer }) => {
    // if (!userAnswer) {
      // return 'white';
    // }
    // else if (userAnswer.correct) {
      // return 'green';
    // }
    // else if (!userAnswer.correct) {
      // return 'red';
    // }
  // }} 
// `

export default Question;
