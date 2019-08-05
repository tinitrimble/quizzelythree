import React, { Component } from 'react'
import Header from '../layouts/Header.js'
import Footer from '../layouts/Footer.js'
import styled from 'styled-components'


class About extends Component {
  render() {
    return(
    <About.Div>
      <Header />
      <About.Explanation>
        Take quizzes for no reason here.
      </About.Explanation>
      <Footer />
    </About.Div>
    )
  }
}

About.Div = styled.div`
`

About.Explanation = styled.p`
  padding: 228px;
`

export default About;
