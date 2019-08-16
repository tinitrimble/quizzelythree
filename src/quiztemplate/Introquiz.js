import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PageHeader } from '../pages'

class Introquiz extends Component {
  static propTypes = {
    quiztitle: PropTypes.string.isRequired,
    intropic: PropTypes.string,
    quizsummary: PropTypes.string,
    onClick: PropTypes.func.isRequired
  }
  render() {
    return (
      <Introquiz.QuizTitle>
        <PageHeader>{this.props.quiztitle}</PageHeader>
        <Introquiz.QuizpicContainer>
          <Introquiz.Quizpic src={this.props.intropic} alt="quizpic" />
        </Introquiz.QuizpicContainer>
        <Introquiz.Summary>
          {this.props.quizsummary}
        </Introquiz.Summary>
        <Introquiz.Begin onClick={this.props.onClick}>Begin Quiz</Introquiz.Begin>
      </Introquiz.QuizTitle>
    )
  }
}

Introquiz.QuizTitle = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  max-width: 350px;
`

Introquiz.QuizpicContainer = styled.div`
  display: flex;
  text-align: center;
  align-self: center;
  align-items: flex-start;
`

Introquiz.Quizpic = styled.img`
  margin-top: 40px;
  border-radius: 10px;
  max-width: 325px;
`

Introquiz.Summary = styled.div`
  margin: 25px 0px 25px 0px;
  max-width: 300px;
  align-self: center;
  color: #3e4a48;
  font-family: sans-serif;
  font-size: 16px;
`

Introquiz.Begin = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #bacdc5;
  font-size: 16px;
  background-color: #fff;
  align-self: center;
  color: #59605f;
  &:hover {
    background-color: #bacdc5;
    color: #fafffc;
  }
`

export default Introquiz;
