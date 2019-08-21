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
  scrollDown() {
      scrollToElement(".resultblurb", {
        align: "bottom",
        offset: 1000
      })
  }
  render() {
    return (
      <Results.ResultBox>
        <Results.Headline>{this.props.headline}</Results.Headline>
        <Results.Score>You scored: {this.props.score}</Results.Score>
        <Results.ResultPicContainer>
          <Results.ResultPic src={this.props.resultpic} alt="resultpic" onLoad={() => this.scrollDown()} />
        </Results.ResultPicContainer>
          <Results.ResultBlurb className="resultblurb">
            {this.props.summary}
          </Results.ResultBlurb>
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
  font-size: 24px;
  color: #6ec8b2;
  margin: 0 auto;
  margin-top: 10px;
`

Results.Headline = styled.h2`
  font-size: 32px;
  margin: 0 auto;
  color: #f090ab;
`

Results.ResultPicContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-self: center;
`

Results.ResultPic = styled.img`
  max-width: 325px;
  max-height: 200px;
  align-self: center;
  border-radius: 5px;
`

Results.ResultBlurb = styled.p`
  display: flex;
  align-self: center;
  text-align: center;
  max-width: 300px;
  font-family: sans-serif;
  font-size: 16;
  font-weight: 300px;
  color: #3e4a48;
  padding-bottom: 20px;
`

export default Results
