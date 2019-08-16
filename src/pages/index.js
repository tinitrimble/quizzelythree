import React from "react"
import Header from "../layouts/Header.js"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import QuizButton from './QuizButton'
import styled from 'styled-components'

const Mainpage = ({ data }) => {
  const quizzes = data.allDataJson.edges.map(edge => edge.node); 
  return (
    <Mainpage.Quizlist>
      <Header />
      <PageHeader>Welcome to Quizzelydoo</PageHeader>
      <Mainpage.Subhead> A Place to Waste Time </Mainpage.Subhead>
      <Mainpage.TheQuizzes>
        {quizzes.map(quiz => (
          <QuizButton to={`/quiz/${quiz.slug}`} key={quiz.slug} title={quiz.quizheadline.quiztitle} picture={quiz.quizheadline.intropic} alt="intropic" /> 
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
export const PageHeader = styled.h1`
  font-family: serif;
  color: #002921;
  font-size: 28px;
  align-self: center;
  max-width: 95%;
  padding-top: 40px;
  margin: 0;
  margin-top: 65px;
  text-align: center;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;
  color: #002921;
`

Mainpage.Subhead = styled.h4`
  font-weight: 200;
  font-size: 24px;
  margin: 0;
`

Mainpage.TheQuizzes = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 20px;
`;


Mainpage.Link = styled(Link)`
  margin: 8px;
  max-width: 350px;
  height: 230px;
  justify-content: center;
  padding: 15px;
  text-decoration: none;
  box-shadow: 0 4px 6px 0 #dce6e5;
  font-weight: 300;
  color: #3e4a48;
  text-align:left;
  &:hover {
    box-shadow: 0 4px 6px 0 #bacfcc;
  }
`

Mainpage.Intropic = styled.img`
  align-self: left;
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
