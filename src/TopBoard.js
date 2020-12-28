import React from "react";
import ScoreBoard from "./ScoreBoard";
import "./scss/TopBoard.scss";

function TopBoard() {
  return (
    <div className="topBoard">
      <img src="images/logo.svg" alt="" className="topBoard__logo" />
      <ScoreBoard />
    </div>
  );
}

export default TopBoard;
