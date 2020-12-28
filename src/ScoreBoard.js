import React from "react";

function ScoreBoard() {
  return (
    <div className="scoreBoard">
      <p>SCORE</p>
      <div className="scoreBoard__score">
        <div className="user">
          <p className="user__score">0</p>
          <p>YOU</p>
        </div>
        <p className="dash">-</p>
        <div className="computer">
          <p className="computer__score">0</p>
          <p>COMPUTER</p>
        </div>
      </div>
      <p className="ties">
        TIES - <span>0</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
