import React, { Component } from 'react'
import Header from '../layouts/Header.js'
import Footer from '../layouts/Footer.js'
import styled from 'styled-components'


class Clickhere extends Component {
  render() {
    return(
    <Clickhere.Disclaimer>
      <Header />
      <Clickhere.Explanatorybit>
        You clicked here.
      </Clickhere.Explanatorybit>
      <Footer />
    </Clickhere.Disclaimer>
    )
  }
}

Clickhere.Disclaimer = styled.div`
`

Clickhere.Explanatorybit = styled.p`
  padding: 228px;
`


export default Clickhere;
