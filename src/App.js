import React, { useState, useEffect } from 'react';
import './App.css';

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

  return questions.length > 0 ? (
    <div className="container">
      <div>
        <h2 dangerouslySetInnerHTML={{ __html: questions[0].question }}></h2>
      </div>
      <div>
        <div>{questions[0].correct_answer}</div>
        <div>{questions[0].incorrect_answers[0]}</div>
        <div>{questions[0].incorrect_answers[1]}</div>
        <div>{questions[0].incorrect_answers[2]}</div>
      </div>
    </div>
  ) : (
    <h2>Loading..</h2>
  );
}

export default App;
