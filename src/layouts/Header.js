import React from 'react'
import Link from 'gatsby-link'
import logo from '../images/q2.svg'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const Header = () => (
  <Header.Div ui-view="header" autoscroll="true">
      <Helmet
          title="Quizzelydoo - A Place To Waste Time"
          meta={[
            { name: 'description', content: 'A Quiz Site' },
            { name: 'keywords', content: 'quiz, test' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${logo}` }
          ]}
        />
    <Header.Title to="/" className="page-name">
      <Header.Logo src={logo} className="logo" alt="logo" />
      <Header.PageName>uizzelydoo</Header.PageName>
    </Header.Title>
  </Header.Div>
)

Header.Div = styled.div`
  background-color: rgb(220, 230, 229, 0.95);
  z-index: 2;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  justify-content: center;
  opacity: 50%;
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
