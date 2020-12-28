import React from "react";
import ScoreBoard from "./ScoreBoard";

function TopBoard() {
  return (
    <div className="scoreBoard">
      <img src="images/logo.svg" alt="" className="scoreBoard__logo" />
      <ScoreBoard />
    </div>
  );
}

export default TopBoard;
