import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/q2.svg'
import styled from 'styled-components'

const Header = () => (
  <Header.Div ui-view="header" autoscroll="true">
    <Header.Logo src={logo} className="logo" alt="logo" />
    <Header.PageName to="/" className="page-name">Quizzelydoo</Header.PageName>
    <Header.Input type="text" name="search" placeholder="Search" className="searchbar" >
    </Header.Input>
  </Header.Div>
)

Header.Div = styled.div`
  background-color: #fff;
  height: 90px;
  border-bottom: 1px solid #9116fc;
`;

Header.Logo = styled.img`
  height: 75px;
  margin: 5px 30px 1px 20px;
  vertical-align: middle;
`;

Header.PageName = styled(Link)`
  text-decoration: none;
  font: 'Amatic';
  font-weight: 200;
  color: #002921;
  vertical-align: middle;
  padding: 16px 2px 2px 2px;
  font-size: 36px;
  display: inline;
`;

Header.Input = styled.input`
  display: inline;
  float: right;
  margin-top: 32px;
  width: 170px;
  transition: width 0.4s ease-in-out;
  font-size: 16px;

  &:hover & {
    width: 26%;
    outline: 1px solid rgba(249, 113, 49, 0.5);
    font-size: 16px;
  }
`;

export default Header;
