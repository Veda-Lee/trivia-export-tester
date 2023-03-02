import App from "../App";
export default function AnswerChoices(props) {
  const buttons = [];
  for (let i = 0; i < props.answer.length; i++) {
    buttons.push(
      <button
        className="button-choice"
        key={i}
        onClick={function () {
          props.setAnswerDisplay(props.answer[i]);
        }}
      >
        {props.answer[i]}
      </button>
    );
    //<button onClick={props.goToTheNextQuestion}>"Next Question"</button>
  }
  console.log("hello");
  console.log(props.userAnswer());
  return (
    <div className="answer-choice">
      {props.userAnswer()}
      <br />
      {buttons}
    </div>
  );
}
