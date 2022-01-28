import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Result({ noOfQuestion, score }) {
  return (
    <div className="container">
      <Link to="/">
        <FontAwesomeIcon icon={faTimes} className="cross-btn" />
      </Link>
      <div className="result-main">
        <h1>Congratulations!!</h1>
        <h3>
          Your Score is <span>{score}</span> out of {noOfQuestion}
        </h3>
      </div>
    </div>
  );
}

export default Result;
