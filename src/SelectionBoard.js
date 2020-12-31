import React, { useState } from "react";
import Selection from "./Selection";
import "./scss/SelectionBoard.scss";

function SelectionBoard() {
  const [selections, setSelections] = useState([
    {
      image: "images/icon-paper.svg",
      color: {
        border: "hsl(230, 89%, 62%)",
        shadow: " hsl(230, 89%, 65%)",
        background: "#2844BE",
      },
      element: "paper",
    },
    {
      image: "images/icon-scissors.svg",
      color: {
        border: "hsl(39, 89%, 49%)",
        shadow: " hsl(40, 84%, 53%)",
        background: "#C76C1B",
      },
      element: "scissors",
    },
    {
      image: "images/icon-rock.svg",
      color: {
        border: "hsl(349, 71%, 52%)",
        shadow: " hsl(349, 70%, 56%)",
        background: "#9E1533",
      },
      element: "rock",
    },
  ]);
  return (
    <div className="selectionBoard">
      <img
        src="images/bg-triangle.svg"
        alt=""
        className="selectionBoard__center"
      />

      <div className="selectionBoard__selections">
        {selections.map((selection) => (
          <Selection
            key={selection.element}
            image={selection.image}
            color={selection.color}
            element={selection.element}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectionBoard;
