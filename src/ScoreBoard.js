import React from "react";
import "./scss/ScoreBoard.scss";

function ScoreBoard() {
  return (
    <div className="scoreBoard">
      <p className="scoreBoard__text">SCORE</p>
      <div className="scoreBoard__score">
        <div className="user">
          <p className="user__score">0</p>
          <p className="user__name">YOU</p>
        </div>
        <p className="dash">-</p>
        <div className="computer">
          <p className="computer__score">0</p>
          <p className="computer__name">COMPUTER</p>
        </div>
      </div>
      <p className="ties">
        TIES - <span>0</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
