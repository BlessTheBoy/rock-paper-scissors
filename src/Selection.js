import React, { useEffect, useState } from "react";
import "./scss/Selection.scss";
import { useStateValue } from "./StateProvider";

function Selection({ color, image, element, winner }) {
  const [{ clicked }, dispatch] = useStateValue();

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth > 600 ? setMobile(false) : setMobile(true);
  }, []);

  const selectionClicked = () => {
    dispatch({
      type: "OPTION-SELECTED",
      element,
    });

    setTimeout(function () {
      dispatch({
        type: "CHOOSE-WINNER",
        element,
      });
    }, 3000);
    setTimeout(function () {
      dispatch({
        type: "REVEAL-WINNER",
      });
    }, 4000);
  };
  return (
    <div
      className={` selection ${clicked && "clicked"} ${winner && "winner"}`}
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      ${color.border},
      ${color.shadow}
    )`,
        boxShadow: `0px ${mobile ? "5px" : "8px"} 0px ${color.background}`,
      }}
      data-id={element && element}
      onClick={() => element && selectionClicked()}>
      <div className="selection__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Selection;
