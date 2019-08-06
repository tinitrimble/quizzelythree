import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/q2.svg'
import styled from 'styled-components'

const Header = () => (
  <Header.Div ui-view="header" autoscroll="true">
    <Header.Title to="/" className="page-name">
      <Header.Logo src={logo} className="logo" alt="logo" />
      <Header.PageName>uizzelydoo</Header.PageName>
    </Header.Title>
  </Header.Div>
)

Header.Div = styled.div`
  background-color: #fff;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

Header.Title = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  text-decoration: none;
`

Header.Logo = styled.img`
  height: 75px;
`;

Header.PageName = styled.div`
  margin-top: 36px;
  margin-left: -15px;
  display: flex;
  text-decoration: underline;
  text-decoration-color: #6EC8B2;
  font-family: sans-serif;
  color: #002921;
  font-size: 35px;
`;

export default Header;
