import React from "react";
import Selection from "./Selection";
import "./scss/SelectionBoard.scss";

function SelectionBoard() {
  return (
    <div className="selectionBoard">
      <img
        src="images/bg-triangle.svg"
        alt=""
        className="selectionBoard__center"
      />

      <div className="selectionBoard__selections">
        <Selection
          className="paper"
          image="images/icon-paper.svg"
          color={{
            border: "hsl(230, 89%, 62%)",
            shadow: " hsl(230, 89%, 65%)",
            background: "#2844BE",
          }}
          element="paper"
        />
        <Selection
          image="images/icon-scissors.svg"
          color={{
            border: "hsl(39, 89%, 49%)",
            shadow: " hsl(40, 84%, 53%)",
            background: "#C76C1B",
          }}
          element="scissors"
        />
        <Selection
          image="images/icon-rock.svg"
          color={{
            border: "hsl(349, 71%, 52%)",
            shadow: " hsl(349, 70%, 56%)",
            background: "#9E1533",
          }}
          element="rock"
        />
      </div>
    </div>
  );
}

export default SelectionBoard;
