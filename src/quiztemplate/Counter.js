import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

class Counter extends Component {
  static propTypes = {
    totalscore: PropTypes.number.isRequired
  }
  render() {
    return (
      <Counter.Score>
        <Counter.Text> Your score is: {this.props.totalscore}
        </Counter.Text>
      </Counter.Score>
    )
  }
}

Counter.Score = styled.div`
  border: 1px solid #9116fc;
  background-color: white;
  color: black;
  color: #59605f;
  text-align: center;
  bottom: 0;
  width: 100%;
`

Counter.Text = styled.p`
  font-size: 10px;
`





export default Counter;
