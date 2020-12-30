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
          image="images/icon-rock.svg"
          color={{
            border: "hsl(39, 89%, 49%)",
            shadow: " hsl(40, 84%, 53%)",
            background: "#C76C1B",
          }}
        />
        <Selection
          image="images/icon-rock.svg"
          color={{
            border: "hsl(39, 89%, 49%)",
            shadow: " hsl(40, 84%, 53%)",
            background: "#C76C1B",
          }}
        />
        <Selection
          image="images/icon-rock.svg"
          color={{
            border: "hsl(39, 89%, 49%)",
            shadow: " hsl(40, 84%, 53%)",
            background: "#C76C1B",
          }}
        />
      </div>
    </div>
  );
}

export default SelectionBoard;
