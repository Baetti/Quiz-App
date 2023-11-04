import React, { useState } from "react";
import { questions } from "./questions";

function Quiz() {
  const [activeQuestion, setActiveQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: "",
    correctAnswers: "",
    wrongAnswers: "",
  });

  // const quiz = { questions };
  const { question, options } = questions[activeQuestion];

  const onClickNext = () => {
    setActiveQuestions((previous) => previous + 1);
    setResult((previous) =>
      selectedAnswer
        ? {
            ...previous,
            score: previous.score + 5,
            correctAnswers: previous.correctAnswers + 1,
          }
        : { ...previous, wrongAnswers: previous.wrongAnswers + 1 }
    );
  };

  return (
    <div className="d-flex w-100 justify-content-center flex-column">
      <h2>quiz</h2>
      <h2>{question}</h2>
      <ul>
        {options.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={onClickNext} className="btn">
        Next
      </button>
    </div>
  );
}

export default Quiz;
