import React from 'react';

const AnswerButton = ({ answer }) => <button>{answer}</button>;

const Question = ({
  data: { question, correct_answer, incorrect_answers },
}) => (
  <div>
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
    </div>
    <div>
      <AnswerButton answer={correct_answer} />
      <AnswerButton answer={incorrect_answers[0]} />
      <AnswerButton answer={incorrect_answers[1]} />
      <AnswerButton answer={incorrect_answers[2]} />
    </div>
  </div>
);

export default Question;
