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
        {selections?.map((selection) => (
          <Selection
            key={selection.element}
            image={selection.image}
            color={selection.color}
            element={selection.element}
          />
        ))}
        {clicked && <div className="emptySelection"></div>}
      </div>
    </div>
  );
}

export default SelectionBoard;
