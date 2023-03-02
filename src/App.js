import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import AnswerChoice from "./components/AnswerChoice";
// import Question from "/src/components/Question"
//import Question from "../src/components/Question"

function App() {
  let [currentQuestionNumber, setQuestionNumber] = useState(0);
  let [answerDisplayed, setanswerDisplay] = useState(null);

  function getCorrectAnswer() {
    let correctAnswer =
      data[currentQuestionNumber].question.correct_choice_index;
    return data[currentQuestionNumber].question.choices[correctAnswer];
  }

  console.log(getCorrectAnswer());
  console.log(answerDisplayed);
  function questionAnswered() {
    if (answerDisplayed == null) {
      return "Click an answer above.";
    } else if (answerDisplayed === getCorrectAnswer()) {
      return "Correct:D";
    } else {
      return "Incorrect:(";
    }
  }

  function goToNextQuestion() {
    if (currentQuestionNumber === data.length - 1) {
      setQuestionNumber(0);
      setanswerDisplay(null);
    } else {
      setQuestionNumber(currentQuestionNumber + 1);
      setanswerDisplay(null);
    }
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <h1 className="Question"></h1>
      <img
        alt="paint colors mixed together"
        src={data[currentQuestionNumber].question.image}
      />
      <Question question={data[currentQuestionNumber].question} />
      <AnswerChoice
        setAnswerDisplay={setanswerDisplay}
        userAnswer={questionAnswered}
        answer={data[currentQuestionNumber].question.choices}
      />
      <NextQuestion
        questionNumber={currentQuestionNumber}
        goToTheNextQuestion={goToNextQuestion}
      />
    </div>
  );
}

export default App;
