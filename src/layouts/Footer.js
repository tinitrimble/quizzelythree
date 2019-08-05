import React from 'react'
import { Link } from "gatsby"
import logo from '../images/q2.svg'
import styled from 'styled-components'

const Footer = () => (
  <Footer.Div>
    <Footer.Link to="About">About</Footer.Link>
    <Footer.Link to="Disclaimer">Disclaimer</Footer.Link>
    <Footer.Link to="Clickhere">Click Here</Footer.Link>
    <Footer.Logo src={logo} className="logo" alt="logo" />
  </Footer.Div>
)

Footer.Div = styled.div`
  background-color: white;
  height: 10px;
  font-size: 12px;
  clear: both;
  border-top: 1px solid #9116fc;
  bottom: 0;
  width: 100%;
  margin-top: 50px;
`

Footer.Link = styled(Link)`
    text-decoration: none;
    color: #002921;
    transition: margin-left 0.4s ease-in-out;
    &:hover {
      color: black;
    text-decoration: underline;
  }
`

Footer.Logo = styled.img`
    height: 18px;
    margin-left: 15px;
    margin-bottom: 8px;
`

export default Footer;
