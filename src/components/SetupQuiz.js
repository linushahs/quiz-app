import React from "react";
import { Link } from "react-router-dom";

function SetupQuiz({
  num,
  setNoOfQuestion,
  setSubject,
  setDifficulty,
  setScore,
}) {
  const handleChange = (e, setChange) => {
    setChange(e.target.value);
  };

  const handleStart = () => setScore(0);
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <label htmlFor="question">No. of Questions</label> <br />
      <input
        type="number"
        id="question"
        onChange={(e) => handleChange(e, setNoOfQuestion)}
        value={num}
      />{" "}
      <br />
      {/* For subject option  */}
      <label htmlFor="subject">Subject</label>
      <br />
      <select id="subject" onChange={(e) => handleChange(e, setSubject)}>
        <option value="sports">Sports</option>
        <option value="history">History</option>
        <option value="technology">Technology</option>
      </select>
      <br />
      {/* For Difficulty Option  */}
      <label htmlFor="difficulty">Difficulty</label>
      <br />
      <select id="difficulty" onChange={(e) => handleChange(e, setDifficulty)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <Link to="/quiz">
        <button className="start-btn" onClick={handleStart}>
          Start
        </button>
      </Link>
    </div>
  );
}

export default SetupQuiz;
