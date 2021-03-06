import React, { useState } from "react";
import Selection from "./Selection";
import "./scss/SelectionBoard.scss";
import { useStateValue } from "./StateProvider";
import { Animated } from "react-animated-css";

function SelectionBoard() {
  const [{ score, selections, clicked, winner }, dispatch] = useStateValue();

  const resetBoard = () => {
    console.log("reseting board 000");
    dispatch({
      type: "RESET-BOARD",
    });
  };

  return (
    <div className="selectionBoard">
      {!clicked && (
        <img
          src="images/bg-triangle.svg"
          alt=""
          className="selectionBoard__center"
        />
      )}

      <div className={`selectionBoard__selections ${clicked && "clicked"}`}>
        {selections?.map((selection) =>
          selection.header ? (
            <div className="selectionBoard__selection">
              <h2>{selection.header}</h2>
              <Selection
                key={selection.element}
                image={selection.image}
                color={selection.color}
                element={selection.element}
                winner={selection.winner}
              />
            </div>
          ) : (
            <Selection
              key={selection.element}
              image={selection.image}
              color={selection.color}
              element={selection.element}
            />
          )
        )}
        {selections?.length === 1 && (
          <div className="selectionBoard__selection empty">
            <h2>THE HOUSE PICKED</h2>
            <div className="emptySelection"></div>
          </div>
        )}
      </div>
      {winner && (
        <Animated
          animationIn="fadeInUp"
          animationOut="fadeOut"
          isVisible={true}
          animationInDuration={1000}
          className={`winnerReveal animate__animated animate__bounce ${
            clicked && "clicked"
          }`}>
          {winner === "you" ? (
            <h3>YOU WIN</h3>
          ) : winner === "computer" ? (
            <h3>YOU LOSE</h3>
          ) : (
            <h3>TIE</h3>
          )}
          <button onClick={() => resetBoard()}>PLAY AGAIN</button>
        </Animated>
      )}
    </div>
  );
}

export default SelectionBoard;
