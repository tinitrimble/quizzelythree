import React from "react"
import Header from "../layouts/Header.js"
import Footer from "../layouts/Footer.js"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from 'styled-components'

const Mainpage = ({ data }) => {
  const quizzes = data.allDataJson.edges.map(edge => edge.node); 
  return (
    <Mainpage.Quizlist>
      <Header />
      <Mainpage.Blurb>
        <Mainpage.Header>Welcome to Quizzelydoo! Enjoy your quiz break.</Mainpage.Header>
        <Mainpage.TheQuizzes>
          {quizzes.map(quiz => (
            <Mainpage.Link to={`/quiz/${quiz.slug}`} className="quiz-item">
              {quiz.quizheadline.quiztitle}
              <Mainpage.Intropic src={quiz.quizheadline.intropic} alt="intropic" class="intropic" /> 
            </Mainpage.Link>
          ))}
        </Mainpage.TheQuizzes>
      </Mainpage.Blurb>
      <Footer />
    </Mainpage.Quizlist>
  )
}

Mainpage.Quizlist = styled.div`
  margin: 0 0 0 0;
  padding: 0;
  font-family: sans-serif;
`

Mainpage.Header = styled.h3`
  margin: 0 0 10px 0;
  font: serif;
  color: #002921;
  `

Mainpage.Blurb = styled.div`
  margin: 36px 0 0 120px;
`;


Mainpage.TheQuizzes = styled.div`
`;


Mainpage.Link = styled(Link)`
  display: inline-block;
  width: 430px;
  margin: 20px;
  padding: 15px;
  text-decoration: none;
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
  font-weight: 300;
  color: #3e4a48;
  text-align:left;
  &:hover {
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 04);
  }
`

Mainpage.Intropic = styled.img`
  padding: 15px 0;
  display: block;
  height: 125px;
`

export const query = graphql`
  query GetCorrectQuizQuery {
    allDataJson {
      edges {
        node {
          slug
          quizheadline {
            quiztitle
            intropic
            quizsummary
          }
        }
      }
    }
  }
`

export default Mainpage
