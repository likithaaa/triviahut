import React from 'react';
import '../index.css';

const Question = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div>
      <p className="triviaHut">
        <span className="color1">T</span>
        <span className="color2">r</span>
        <span className="color3">i</span>
        <span className="color4">v</span>
        <span className="color5">i</span>
        <span className="color6">a</span>
        <span className="color7">H</span>
        <span className="color8">u</span>
        <span className="color9">t</span>
      </p>

      <div className="flex flex-col">
        <div className="bg-white text-indigo-600 p-10 rounded font-bold text-base shadow-md">
          <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          {answers.map((answer) => {
            const color = showAnswers
              ? answer === correct_answer
                ? 'bg-green-200'
                : 'bg-red-300'
              : 'bg-white';

            return (
              <button
                className={`${color} p-4 text-indigo-500 font-semibold rounded shadow`}
                onClick={() => handleAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
        {showAnswers && (
          <button
            onClick={handleNextQuestion}
            className={`ml-auto bg-indigo-200 text-indigo-700 p-3 font-semibold rounded shadow mt-5`}
          >
            Next Question
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
