import React from "react"
import Header from "../layouts/Header.js"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import styled from 'styled-components'

const Mainpage = ({ data }) => {
  const quizzes = data.allDataJson.edges.map(edge => edge.node); 
  return (
    <Mainpage.Quizlist>
      <Header />
      <Mainpage.Blurb>
        <Mainpage.Header>Welcome to Quizzelydoo - A Place to Waste Time</Mainpage.Header>
        <Mainpage.TheQuizzes>
          {quizzes.map(quiz => (
            <Mainpage.Link to={`/quiz/${quiz.slug}`} key={quiz.slug} >
              {quiz.quizheadline.quiztitle}
              <Mainpage.Intropic src={quiz.quizheadline.intropic} alt="intropic"/> 
            </Mainpage.Link>
          ))}
        </Mainpage.TheQuizzes>
      </Mainpage.Blurb>
    </Mainpage.Quizlist>
  )
}

Mainpage.Quizlist = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  font-family: sans-serif;
  text-align: center;
  justify-content: center;
  width: 100%;
`

Mainpage.Header = styled.h3`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  justify-content: center;
  font: serif;
  font-weight: 380;
  color: #002921;
`

Mainpage.Blurb = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  font-family: sans-serif;
`;


Mainpage.TheQuizzes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;


Mainpage.Link = styled(Link)`
  display: flex;
  flex-flow: column wrap;
  margin: 10px;
  padding: 15px;
  max-width: 250px;
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
  padding-top: 15px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  max-width: 200px;
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
