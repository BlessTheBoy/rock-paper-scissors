import React, { useEffect, useState } from "react";
import "./scss/Selection.scss";
import { useStateValue } from "./StateProvider";

function Selection({ color, image, element }) {
  const [{}, dispatch] = useStateValue();

  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth > 600 ? setMobile(false) : setMobile(true);
  }, []);

  const clicked = () => {
    dispatch({
      type: "CHOOSE-WINNER",
      element,
    });
  };
  return (
    <div
      className="selection"
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      ${color.border},
      ${color.shadow}
    )`,
        boxShadow: `0px ${mobile ? "5px" : "8px"} 0px ${color.background}`,
      }}
      data-id={element}
      onClick={() => clicked()}>
      <div className="selection__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Selection;
