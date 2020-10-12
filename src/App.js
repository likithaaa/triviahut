import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Components/Questions';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  // const handleAnswer = (answer) => {
  //   setShowAnswers(false);
  //   const newIndex = currentIndex + 1;
  //   setCurrentIndex(newIndex);
  //   // prevents double answers
  //   if (!showAnswers) {
  //     // check for answer
  //     // show another question and change score if correct
  //     if (answer === questions[currentIndex].correct_answer) {
  //       // increase score
  //       setScore(score + 1);
  //     }
  //   }
  //   setShowAnswers(true);
  // };

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
      setShowAnswers(true);
    }
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h2 className="text-white text-3xl font-bold">
          Your score is {score}.
        </h2>
      ) : (
        <Question
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2>Loading.. please wait</h2>
  );
}

export default App;
