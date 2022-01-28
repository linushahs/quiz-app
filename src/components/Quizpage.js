import "./Quizpage.css";
import { useState } from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import QuizOption from "./sub-components/QuizOption";
import { sports } from "../questions/Sports";
import { history } from "../questions/History";
import { technology } from "../questions/Technology";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Quizpage({ noOfQuestion, subject, difficulty, score, setScore }) {
  let quizList =
    subject === "sports"
      ? sports
      : subject === "history"
      ? history
      : technology;

  quizList = quizList.filter((q) => q.difficulty.toLowerCase() === difficulty);

  let isPreviousBtnDisabled = false;
  // states of Quizpage
  // 1. count to iterate over next item
  // 2. quiz for new quizList
  // 3. correct ans selected
  const [pageCount, setPageCount] = useState(1);
  const [quiz, setQuiz] = useState(quizList[0]);
  const [btnIsDisabled, setIsBtnDisabled] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const navigateToResult = useHistory();

  // showNextQuiz (function)
  const showNextQuiz = () => {
    if (pageCount === noOfQuestion || !quizList[pageCount]) {
      setShowResult(true);
    } else {
      setQuiz(quizList[pageCount]);
      setPageCount(pageCount + 1);
      setIsSelected(false);
    }
  };

  //showPreviousQuiz (function)
  const showPreviousQuiz = () => {
    if (pageCount === 1) {
      isPreviousBtnDisabled = true;
    } else {
      isPreviousBtnDisabled = false;
      setPageCount(pageCount - 1);
      setQuiz(quizList[pageCount - 2]);
    }
  };

  //update correct Ans
  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="container">
      <div className="header-container">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} color="rgb(2, 151, 151)" />
          <button class="back-btn">Back</button>
        </Link>
        <div>
          <p>Correct Ans:</p>
          <span>
            {score} / {noOfQuestion}
          </span>
        </div>
      </div>
      <h2 className="question-title">{quiz.question}</h2>
      <ul className="list-container">
        {quiz.options.map((option) => (
          <QuizOption
            opt={option}
            key={option}
            pageCount={pageCount}
            answer={quiz.answer}
            updateScore={updateScore}
            btnIsDisabled={btnIsDisabled}
            setIsBtnDisabled={setIsBtnDisabled}
          />
        ))}
      </ul>

      <div className="btn-container">
        <button
          className="btn left-btn"
          onClick={showPreviousQuiz}
          disabled={isPreviousBtnDisabled}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {showResult ? (
          navigateToResult.push("/result")
        ) : (
          <button className="btn right-btn" onClick={showNextQuiz}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Quizpage;
