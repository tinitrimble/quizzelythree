import React, { Component } from 'react'
import Header from '../layouts/Header.js'
import Footer from '../layouts/Footer.js'
import styled from 'styled-components'

class Disclaimer extends Component {
  render() {
    return(
    <Disclaimer.Div>
      <Header />
      <Disclaimer.Explanatorybit>
        These quizzes mean nothing.
      </Disclaimer.Explanatorybit>
      <Footer />
    </Disclaimer.Div>
    )
  }
}

Disclaimer.Div = styled.div`
`

Disclaimer.Explanatorybit = styled.p`
  padding: 228px;
`

export default Disclaimer;
