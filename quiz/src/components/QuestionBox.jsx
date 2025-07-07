import React, { useState, useEffect } from "react";
import { questions } from "./Questions";

function QuestionBox({ index, checkAnswer }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentQuestion = questions[index];

  const handleClick = (item) => {
    if (isDisabled) return; // prevent double click
    setSelectedOption(item);
    setIsDisabled(true);
    checkAnswer(item, currentQuestion.answer);
  };

  useEffect(() => {
    setIsDisabled(false);
    setSelectedOption(null);
  }, [index]);

  return (
    <div className="question-box">
      <h2>{currentQuestion.question}</h2>
      <div className="options">
        {currentQuestion.options.map((item, idx) => {
          let btnClass = "option-btn";
          if (selectedOption) {
            if (item === currentQuestion.answer) {
              btnClass += " correct";
            } else if (item === selectedOption) {
              btnClass += " wrong";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              disabled={isDisabled}
              className={btnClass}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionBox;
