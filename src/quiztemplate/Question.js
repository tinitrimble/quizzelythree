import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

class Question extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    picture: PropTypes.string,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        option: PropTypes.string.isRequired,
        correct: PropTypes.bool.isRequired,
      })
    ),
    onClick: PropTypes.func.isRequired,
    questionNumber: PropTypes.number.isRequired,
    userAnswer: PropTypes.shape({
      option: PropTypes.string.isRequired,
      correct: PropTypes.bool,
    }),
  }
  render() {
    const {
      answers,
      onClick,
      picture,
      questionNumber,
      text,
      userAnswer,
    } = this.props
    return (
      <Question.GetCorrect>
        <Question.Question>{text}</Question.Question>
        <Question.PicContainer>
          <Question.Pic src={picture} alt="" />
        </Question.PicContainer>
        <Question.PossibleChoices>
          {answers.map((answer, index) => (
            <Question.Button
              key={index}
              onClick={() => onClick(answer, questionNumber)}
              userAnswer={userAnswer}
              answer={answer}
              disabled={!!userAnswer}
            >
              {answer.option}
            </Question.Button>
          ))}
        </Question.PossibleChoices>
      </Question.GetCorrect>
    )
  }
}

Question.GetCorrect = styled.div`
  box-shadow: 0 3px 6px 0 #bacdc5;
  border-radius: 5px;
  width: 90%;
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
  background-color: ${({userAnswer, answer}) => {
    if (!userAnswer) {
      return "white"
    } 
    if (userAnswer.correct && userAnswer.option === answer.option) {
      return "#86ebbd"
    }
    if (!userAnswer.correct && userAnswer.option === answer.option) {
      return "#f090ab"
    }
    return "#acbdbc"
  }};
  color: ${({userAnswer, answer}) => {
    if (!userAnswer) {
      return "black"
    }
    return "white"
  }}
`

export default Question
