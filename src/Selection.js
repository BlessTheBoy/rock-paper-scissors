import React from "react";
import "./scss/Selection.scss";

function Selection({ color, image }) {
  return (
    <div
      className="selection"
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      ${color.border},
      ${color.shadow}
    )`,
        boxShadow: `0px 8px 0px ${color.background}`,
      }}>
      <img src={image} alt="" className="selection__image" />
    </div>
  );
}

export default Selection;
