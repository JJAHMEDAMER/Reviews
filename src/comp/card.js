import React from "react";

const Card = (props) => (
  <div className="card">
    <div className="card--image">
      <img src={props.image} className="card--image--photo" alt="Profile Img" />
    </div>
    <h1 className="card--name">{props.name}</h1>
    <h2 className="card--job">{props.job}</h2>
    <p className="card--text">{props.text} </p>
  </div>
);

export default Card;
