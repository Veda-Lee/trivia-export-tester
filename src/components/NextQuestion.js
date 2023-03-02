import App from "../App";
import data from "../sample_data.json";

function NextQuestion(props) {
  return (
    <div>
      <button onClick={props.goToTheNextQuestion}>
        {props.questionNumber === data.length - 1
          ? "Play Again"
          : "Next Question"}
      </button>
      <p>Question #{props.questionNumber}</p>
    </div>
  );
}

export default NextQuestion;
