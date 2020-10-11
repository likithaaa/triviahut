import React from 'react';

const Question = ({
  data: { question, correct_answer, incorrect_answers },
}) => (
  <div>
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
    </div>
    <div>
      <button>{correct_answer}</button>
      <button>{incorrect_answers[0]}</button>
      <button>{incorrect_answers[1]}</button>
      <button>{incorrect_answers[2]}</button>
    </div>
  </div>
);
