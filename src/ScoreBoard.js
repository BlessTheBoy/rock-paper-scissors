import React from "react";
import "./scss/ScoreBoard.scss";
import { useStateValue } from "./StateProvider";

function ScoreBoard() {
  const [{ score }] = useStateValue();
  return (
    <div className="scoreBoard">
      <p className="scoreBoard__text">SCORE</p>
      <div className="scoreBoard__score">
        <div className="user">
          <p className="user__score">{score?.you}</p>
          <p className="user__name">YOU</p>
        </div>
        <p className="dash">-</p>
        <div className="computer">
          <p className="computer__score">{score?.computer}</p>
          <p className="computer__name">COMPUTER</p>
        </div>
      </div>
      <p className="ties">
        TIES - <span>{score?.ties}</span>
      </p>
    </div>
  );
}

export default ScoreBoard;
