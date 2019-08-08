import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const QuizButton = ({ to, title, picture, alt }) => {
  return (
    <QuizButton.Link to={to}>
      <QuizButton.Title>{title}</QuizButton.Title>
      <QuizButton.Intropic src={picture} alt={alt} />
    </QuizButton.Link>
  )
}

QuizButton.Title = styled.h4`
  color: #274d43;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  font-size: 22px;
  background-color: rgba(186, 219, 211, 0.85);
  margin: 0;
`

QuizButton.Link = styled(Link)`
  position: relative;
  overflow: hidden;
  margin: 18px;
  max-width: 350px;
  height: 230px;
  &:hover {
    box-shadow: 0 4px 6px 0 #bacfcc;
  }
`

QuizButton.Intropic = styled.img`
  object-fit: cover;
  max-width: 120%;
`

export default QuizButton
