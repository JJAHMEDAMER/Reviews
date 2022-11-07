import React from "react";

// Assets
import icon from "../assets/next.png";

const NavSection = ({nextHandle, previousHandle}) => {
  return (
    <div className="nav">
      <div className="nav--scroll">
        <button className="nav--scroll--button" onClick={previousHandle}>
          <img className="nav--scroll--button--img flip" src={icon} alt="next" />
        </button>
        <button className="nav--scroll--button" onClick={nextHandle}>
          <img className="nav--scroll--button--img" src={icon} alt="next" />
        </button>
      </div>
      <button className="nav--surprise" onClick={nextHandle}>Surprise Me!!</button>
    </div>
  );
};

export default NavSection;
