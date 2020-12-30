import React, { useEffect, useState } from "react";
import "./scss/Selection.scss";

function Selection({ color, image, element }) {
  const [mobile, setMobile] = useState(true);
  useEffect(() => {
    window.innerWidth > 600 ? setMobile(false) : setMobile(true);
  }, []);
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
      data-id={element}>
      <div className="selection__image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Selection;
