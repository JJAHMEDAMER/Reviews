import React from "react";

// Assets
import nextIcon from "../assets/next.png";

const NavSection = () => {
  return (
    <div className="nav">
      <div className="nav--scroll">
        <button className="nav--scroll--button flip">
          <img className="nav--scroll--button--img" src={nextIcon} alt="next" />
        </button>
        <button className="nav--scroll--button">
          <img className="nav--scroll--button--img" src={nextIcon} alt="next" />
        </button>
      </div>
      <button className="nav--surprise">Surprise Me!!</button>
    </div>
  );
};

export default NavSection;
