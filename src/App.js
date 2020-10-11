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
    <div className="container"></div>
  ) : (
    <h2>Loading.. please wait</h2>
  );
}

export default App;
