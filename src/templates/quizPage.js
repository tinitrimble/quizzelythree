import React from "react";
import Link from "gatsby-link";
import Quiz from '../quiz/Quiz.js';
import * as PropTypes from "prop-types";

export default class QuizPage extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  }
  render() {
    const {
      title,
      questions,
      results,
      description,
      headerImage
    } = this.props.data.contentfulQuizOneCorrect;
    return (
      <div>
        <Quiz
          title={title}
          intropic={headerImage.file.url}
          description={description}
          questions={questions}
          results={results}
        />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query quizQuery($id: String!) {
    contentfulquizAnswerMatch(id: { eq: $id}) {
    allContentfulQuizAnswerMatch(id: { eq: $id}) {
      id
      title
      description
      headerImage {
        id
        file {
          url
        }
      },
      questionAnswerMatch {
        id,
        questionText,
        picture {
          file {
            url
          }
        }
        answerAnswerMatch {
          label,
          image,
          result
        }
      }
      resultAnswerMatch {
        headline
        resultPicture {
          file {
            url
          }
        }
        summary {
          summary
        }
      }
    },
    contentfulQuizOneCorrect(id: { eq: $id }) {
    allContentfulQuizOneCorrect(id: { eq: $id }) {
      id
      title
      description
      headerImage {
        id
        file {
          url
        }
      },
      questions {
        id,
        questionText,
        picture {
          file {
            url
          }
        }
        answers {
          label,
          correct,
        }
      }
      results {
        headline
        startingScore
        endScore
        resultPicture {
          file {
            url
          }
        }
        summary {
          summary
        }
      }
    }
  }
  }
}`; 
