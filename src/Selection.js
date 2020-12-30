import React from "react";
import "./scss/Selection.scss";

function Selection({ color, image, element }) {
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
      }}
      data-id={element}>
      <div className="selection__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Selection;
