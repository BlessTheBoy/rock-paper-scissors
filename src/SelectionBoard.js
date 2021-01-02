import React, { useState } from "react";
import Selection from "./Selection";
import "./scss/SelectionBoard.scss";
import { useStateValue } from "./StateProvider";

function SelectionBoard() {
  const [{ score, selections, clicked }, dispatch] = useStateValue();
  return (
    <div className="selectionBoard">
      {!clicked && (
        <img
          src="images/bg-triangle.svg"
          alt=""
          className="selectionBoard__center"
        />
      )}

      <div className="selectionBoard__selections">
        {selections?.map((selection) =>
          selection.header ? (
            <div className="selectionBoard__selection">
              <h2>{selection.header}</h2>
              <Selection
                key={selection.element}
                image={selection.image}
                color={selection.color}
                element={selection.element}
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
    </div>
  );
}

export default SelectionBoard;
