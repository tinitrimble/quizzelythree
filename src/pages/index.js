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
      <Mainpage.Header>Welcome to Quizzelydoo - A Place to Waste Time</Mainpage.Header>
      <Mainpage.TheQuizzes>
        {quizzes.map(quiz => (
          <Mainpage.Link to={`/quiz/${quiz.slug}`} key={quiz.slug} >
            {quiz.quizheadline.quiztitle}
            <Mainpage.IntropicContainer>
              <Mainpage.Intropic src={quiz.quizheadline.intropic} alt="intropic"/> 
            </Mainpage.IntropicContainer>
          </Mainpage.Link>
        ))}
      </Mainpage.TheQuizzes>
    </Mainpage.Quizlist>
  )
}

Mainpage.Quizlist = styled.div`
  display: flex;
  flex-flow: column wrap;
  font-family: sans-serif;
  text-align: center;
  justify-content: center;
`

Mainpage.Header = styled.h1`
  font-family: serif;
  color: #002921;
  font-size: 34px;
  margin: 42px 40px 0 40px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;
  color: #002921;
`

Mainpage.TheQuizzes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 20px;
`;


Mainpage.Link = styled(Link)`
  margin: 10px;
  max-width: 250px;
  height: 240px;
  justify-content: center;
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

Mainpage.IntropicContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  height: 200px;
`

Mainpage.Intropic = styled.img`
  max-width: 200px;
  border-radius: 4px;
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
