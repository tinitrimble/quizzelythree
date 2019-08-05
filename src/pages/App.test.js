import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from '../templates/quiz.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz />, div);
});
