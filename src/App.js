import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Components/Questions';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    // check for answer
    // show another question and change score if correct
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      <Question data={questions[currentIndex]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h2>Loading.. please wait</h2>
  );
}

export default App;
