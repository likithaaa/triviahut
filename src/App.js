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
      });
  }, []);

  return (
    <div className="container">
      <div>Question</div>
      <div>
        <div>Answer 1</div>
        <div>Answer 2</div>
        <div>Answer 3</div>
        <div>Answer 4</div>
      </div>
    </div>
  );
}

export default App;
