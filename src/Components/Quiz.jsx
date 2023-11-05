import React, { useState } from "react";
import { questions } from "./questions";
import "./Quiz.css";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const { question, options, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setResult((previous) =>
      selectedAnswer
        ? {
            ...previous,
            score: previous.score + 5,
            correctAnswers: previous.correctAnswers + 1,
          }
        : { ...previous, wrongAnswers: previous.wrongAnswers + 1 }
    );

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((previous) => previous + 1);
      setSelectedAnswer("");
      setSelectedAnswerIndex(null);
    } else {
      setShowResult(true);
    }
  };

  const onSelectedAnswer = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const resetQuiz = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setShowResult(false);
    setResult({ score: 0, correctAnswers: 0, wrongAnswers: 0 });
    setSelectedAnswerIndex(null);
  };

  return (
    <div
      style={{ height: "75vh" }}
      className="d-flex w-100 p-1 justify-content-center flex-column "
    >
      {!showResult ? (
        <>
          <div>
            <span className="fs-3 text-warning">
              {addLeadingZero(activeQuestion + 1)}
            </span>
            <span className="fs-4 text-primary">
              /{addLeadingZero(questions.length)}
            </span>
          </div>
          <div className="px-3 py-1">
            <h1
              className="text-center text-primary fw-bolder"
              style={{ fontFamily: "Caprasimo" }}
            >
              Quiz
            </h1>
            <h2
              style={{ fontFamily: "Bacasime Antique" }}
              className="fw-bolder text-dark"
            >
              {question}
            </h2>
          </div>

          {options.map((answer, index) => (
            <div className="px-2" key={answer}>
              <button
                style={{ fontFamily: "Bacasime Antique" }}
                className={`btn w-100 my-1 ${
                  selectedAnswerIndex === index
                    ? "bg-success border border-dark"
                    : "bg-dark border border-white"
                }`}
                onClick={() => onSelectedAnswer(answer, index)}
              >
                {answer}
              </button>
            </div>
          ))}

          <div className="d-flex justify-content-end px-2 mb-2 quiz-container">
            <button
              onClick={onClickNext}
              className="btn btn-success"
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="d-flex w-100 p-1 justify-content-center flex-column ">
          <h2>Total Questions: {questions.length}</h2>
          <h3>Total Score: {result.score}</h3>
          <h3>Correct: {result.correctAnswers}</h3>
          <button onClick={resetQuiz} className="btn btn-primary">
            New Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
