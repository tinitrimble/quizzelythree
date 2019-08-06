import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/q2.svg'
import styled from 'styled-components'

const Header = () => (
  <Header.Div ui-view="header" autoscroll="true">
    <Header.Logo src={logo} className="logo" alt="logo" />
    <Header.PageName to="/" className="page-name">Quizzelydoo</Header.PageName>
  </Header.Div>
)

Header.Div = styled.div`
  background-color: #fff;
  border-bottom: 1px solid #9116fc;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

Header.Logo = styled.img`
  height: 75px;
`;

Header.PageName = styled(Link)`
  display: flex;
  text-decoration: none;
  font: 'Amatic';
  font-weight: 200;
  color: #002921;
  font-size: 36px;
`;

export default Header;
