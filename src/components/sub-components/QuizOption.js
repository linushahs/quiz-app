import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function QuizOption({
  opt,
  answer,
  pageCount,
  updateScore,
  btnIsDisabled,
  setIsBtnDisabled,
}) {
  // state values
  // 1. for selection of answer
  const [isSelected, setIsSelected] = useState(false);

  //component renders after each quiz changes
  useEffect(() => {
    setIsBtnDisabled(false);
  }, [pageCount]);

  // Handle Selection function
  const handleSelection = () => {
    setIsSelected(isSelected ? false : true);
    if (opt === answer) {
      updateScore();
    }
    setIsBtnDisabled(true);
  };

  //item border Style based on selection
  const itemStyle = {
    borderColor: isSelected
      ? opt === answer
        ? "#029797"
        : "#db3d3d"
      : "#d6d6d6",
    pointerEvents: btnIsDisabled ? "none" : "auto",
  };

  //button style based on selection
  const btnStyle = {
    color: isSelected
      ? opt === answer
        ? "#029797"
        : "#db3d3d"
      : "rgb(213, 213, 213)",
    fontSize: "22px",
  };

  return (
    <div className="item-container" style={itemStyle} onClick={handleSelection}>
      <h4 className="item">{opt}</h4>
      <button className="select-btn">
        <FontAwesomeIcon icon={faCheckCircle} style={btnStyle} />
      </button>
    </div>
  );
}

export default QuizOption;
