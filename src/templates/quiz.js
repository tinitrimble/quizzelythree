import React from "react";

const Quiz = data => {
  console.log(data)
  return <div>examplequiz</div>
}

export const query = graphql`
  query($slug: String!) {
    dataJson(slug: { eq: $slug }) {
      id
      questions {
        text
        picture
      }
      results {
        headline
        resultpic
        summary
      }
      quizheadline {
        quiztitle
        intropic
        quizsummary
      }
    }
  }
`

export default Quiz;
