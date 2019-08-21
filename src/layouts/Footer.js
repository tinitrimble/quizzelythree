import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/q2.svg'
import styled from 'styled-components'

const Footer = () => (
  <Footer.Div>
    <Footer.Link to="/">
      <Footer.Logo src={logo} className="logo" alt="logo" />
    </Footer.Link>
  </Footer.Div>
)

Footer.Div = styled.div`
`;

Footer.Link = styled(Link)`
  background-color: rgb(220, 230, 229, 0.95);
  z-index: 2;
  height: 46px;
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  text-decoration: none;
`

Footer.Logo = styled.img`
 height: 46px;
 align-self: center;
 margin-right: 4px;
 justify: middle;
`;

export default Footer;
