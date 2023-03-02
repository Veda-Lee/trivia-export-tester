import AnswerChoices from "./AnswerChoice";

function Question(props) {
  console.log("hi");
  console.log(props);
  return <div>{props.question.text}</div>;
}
export default Question;
