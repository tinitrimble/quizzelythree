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
      <Results.ResultPic src={this.props.resultpic} alt="resultpic" />
      <Results.ResultBlurb className="resultblurb">{this.props.summary}</Results.ResultBlurb>
      </Results.ResultBox>
    )
  }
}

Results.ResultBox = styled.div`
  border: 0.5px #E85A4F solid;
  background-color: white;
  border-radius: 5px;
  text-align: center;
  max-width: 60%;
  min-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`

Results.Score = styled.h1`
  font-size: 20px;
`

Results.Headline = styled.h2`
  font-size: 26px;
`
      
Results.ResultPic = styled.img`
  max-height: 200px;
  border-radius: 5px;
`

Results.ResultBlurb = styled.p`
  padding: 20px 155px;
`

export default Results;
