import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SetupQuiz from "./components/SetupQuiz";
import Quizpage from "./components/Quizpage";
import Result from "./components/Result";

function App() {
  // State:
  // 1. set noOfQuestion
  // 2. set subject
  // 3. set difficulty
  const [noOfQuestion, setNoOfQuestion] = useState(5);
  const [subject, setSubject] = useState("sports");
  const [difficulty, setDifficulty] = useState("easy");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Router>
        <Route path="/(|quiz-app)/" exact>
          <SetupQuiz
            num={noOfQuestion}
            setNoOfQuestion={setNoOfQuestion}
            setSubject={setSubject}
            setDifficulty={setDifficulty}
            setScore={setScore}
          />
        </Route>
        <Route path="/quiz">
          <Quizpage
            noOfQuestion={noOfQuestion}
            subject={subject}
            difficulty={difficulty}
            score={score}
            setScore={setScore}
          />
        </Route>
        <Route path="/result">
          <Result score={score} noOfQuestion={noOfQuestion} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
