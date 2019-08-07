import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import scrollToElement from 'scroll-to-element'

class Results extends Component {
  static propTypes = {
    score: PropTypes.number.isRequired,
    headline: PropTypes.string.isRequired,
    resultpic: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }
  componentDidMount() {
    window.setTimeout(() => {
      scrollToElement('.resultblurb', {
        align: 'middle',
        duration: 500
      })
    }, 500)
  }
  render() {
    return (
      <Results.ResultBox>
      <Results.Score>You scored: {this.props.score}</Results.Score>
      <Results.Headline>{this.props.headline}</Results.Headline>
      <Results.ResultPicContainer>
        <Results.ResultPic src={this.props.resultpic} alt="resultpic" />
      <Results.ResultBlurb className="resultblurb">{this.props.summary}</Results.ResultBlurb>
      </Results.ResultPicContainer>
      </Results.ResultBox>
    )
  }
}

Results.ResultBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  border-radius: 5px;
  text-align: center;
  margin-top: 36px;
  align-self: center;
`

Results.Score = styled.h1`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  text-align: center;
  font-size: 28px;
  margin: 0 auto;
`

Results.Headline = styled.h2`
  font-size: 36px;
  margin: 0 auto;
  color: #f27100;
`

Results.ResultPicContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-self: center;
`
      
Results.ResultPic = styled.img`
  max-width: 400px;
  align-self: center;
  border-radius: 5px;
`

Results.ResultBlurb = styled.p`
  display: flex;
  align-self: center;
  max-width: 300px;
`

export default Results;
