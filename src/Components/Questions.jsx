import React from 'react';

const AnswerButton = ({ answer, className }) => (
  <button
    className={`bg-white p-4 text-purple-800 font-semibold rounded shadow ${className}`}
  >
    {answer}
  </button>
);

const Question = ({
  handleAnswer,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffleAnswer = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div>
      <div className="bg-white text-purple-800 p-10 rounded shadow-md">
        <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <AnswerButton
          className={correct_answer === shuffleAnswer[0] ? 'bg-purple-300' : ''}
          onClick={() => handleAnswer(shuffleAnswer[0])}
          answer={shuffleAnswer[0]}
        />
        <AnswerButton
          className={correct_answer === shuffleAnswer[1] ? 'bg-purple-300' : ''}
          onClick={() => handleAnswer(shuffleAnswer[1])}
          answer={shuffleAnswer[1]}
        />
        <AnswerButton
          className={correct_answer === shuffleAnswer[2] ? 'bg-purple-300' : ''}
          onClick={() => handleAnswer(shuffleAnswer[2])}
          answer={shuffleAnswer[2]}
        />
        <AnswerButton
          className={correct_answer === shuffleAnswer[3] ? 'bg-purple-300' : ''}
          onClick={() => handleAnswer(shuffleAnswer[3])}
          answer={shuffleAnswer[3]}
        />
      </div>
    </div>
  );
};

export default Question;
