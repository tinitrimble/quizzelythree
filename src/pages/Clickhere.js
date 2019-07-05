import React from "react"
import Header from "../layouts/Header.js"
import Footer from "../layouts/Footer.js"
import "./Footerlinks.css"
import { Link } from "gatsby";
import { graphql } from "gatsby"

const Clickhere = ({ data }) => {
  const quizzes = data.allDataJson.edges.map(edge => edge.node); 
  return (
    <div className="Clickhere">
      <Header />
      <div id="blurb">
        <p>
          {quizzes.map(quiz => (
            <h1>{quiz.quizheadline.quiztitle}</h1>
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

export default Clickhere
