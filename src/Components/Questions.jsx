import React from 'react';

const Question = ({
  showAnswers,
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
        {shuffleAnswer.map((answer) => {
          const color = showAnswers
            ? answer === correct_answer
              ? 'bg-green-500'
              : 'bg-red-500'
            : 'bg-white';

          return (
            <button
              className={`${color} p-4 text-purple-800 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Question;
