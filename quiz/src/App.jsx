import { useState } from "react";
import "./App.css";
import { questions } from "./components/Questions";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [score, SetScore] = useState(0);
  const [questionsRemaining, SetQuestionsRemaining] = useState(
    questions.length - 1
  );
  const [questionIndex, setQuestionIndex] = useState(0);

  const increaseIndex = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      SetQuestionsRemaining(questionsRemaining - 1);
    } else {
      setQuestionIndex(0);
      SetQuestionsRemaining(questions.length - 1);
      alert(`Your Score:  ${score}`);
      SetScore(0);
    }
  };

  const checkAnswerResult = (option, answer) => {
    console.log(option, answer);
    if (option === answer) {
      SetScore(score + 1);
    }
  };
  return (
    <>
      <div className="quiz-container">
        <h1>Quiz App</h1>

        <div className="scoreboard">
          <p>
            <strong>Score:</strong> {score}
          </p>
          <p>
            <strong>Questions Remaining:</strong> {questionsRemaining}
          </p>
        </div>
        <QuestionBox index={questionIndex} checkAnswer={checkAnswerResult} />
        <div className="navigation">
          <button onClick={increaseIndex} className="next-btn">
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
