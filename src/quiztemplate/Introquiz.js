import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
        <Introquiz.Header>{this.props.quiztitle}</Introquiz.Header>
        <Introquiz.Quizpic src={this.props.intropic} alt="quizpic" />
        <Introquiz.Summary>
          {this.props.quizsummary}
        </Introquiz.Summary>
        <Introquiz.Begin onClick={this.props.onClick}>Begin Quiz</Introquiz.Begin>
      </Introquiz.QuizTitle>
    )
  }
}

Introquiz.QuizTitle = styled.div`
  text-align: center;
  margin: 25px 0px 25px 0px;
  padding-bottom: 20px;
  position: relative;
`

Introquiz.Header = styled.h1`
  font-size: 34px;
  text-align: center;
  display: block;
  color: #002921;
  font:sans-serif;
`

Introquiz.Quizpic = styled.img`
  border-radius: 10px;
`

Introquiz.Summary = styled.div`
  margin: 25px 0px 25px 0px;
  color: #3e4a48;
`

Introquiz.Begin = styled(Button)`
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #6EC8B2;
  font-size: 16px;
  background-color: #fff;
  margin-bottom: 25px;
  color: #59605f;
  &:hover {
    background-color: #6EC8B2;
    color: #fff;
  }
`

export default Introquiz;
