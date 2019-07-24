import React from "react"
import Header from "../layouts/Header.js"
import Footer from "../layouts/Footer.js"
import "../layouts/Footerlinks.css"
import { Link } from "gatsby";
import { graphql } from "gatsby"
import '../layouts/index.css' 

const Quizlist = ({ data }) => {
  const quizzes = data.allDataJson.edges.map(edge => edge.node); 
  return (
    <div className="Quizlist">
      <Header />
      <div id="blurb">
        <h3>Welcome to Quizzelydoo! Enjoy your quiz break.</h3>
        <p>
          {quizzes.map(quiz => (
            <Link to={`/quiz/${quiz.slug}`} className="quiz-list">
              {quiz.quizheadline.quiztitle}
              <img src={quiz.quizheadline.intropic} alt="intropic" class="intropic" /> 
            </Link>
          ))}
        </p>
        <div class="boxtest" />
      </div>
      <Footer />
    </div>
  )
}

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

export default Quizlist
