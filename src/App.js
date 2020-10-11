import React, { useState, useEffect } from 'react';
import './App.css';
import Question from './Components/Questions';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    // check for answer
  };

  return questions.length > 0 ? (
    <div className="container">
      <Question data={questions[0]} handleAnswer={handleAnswer} />
    </div>
  ) : (
    <h2>Loading.. please wait</h2>
  );
}

export default App;
