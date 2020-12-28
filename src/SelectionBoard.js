import React from "react";
import Selection from "./Selection";

function SelectionBoard() {
  return (
    <div className="selectionBoard">
      <img
        src="images/bg-triangle.svg"
        alt=""
        className="selectionBoardCenter"
      />
      <div className="selectionBoard__selections">
        <Selection />
        <Selection />
        <Selection />
      </div>
    </div>
  );
}

export default SelectionBoard;
