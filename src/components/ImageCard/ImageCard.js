import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <div className="col">
    <div className="card">
      <div className="img-container">
        <span onClick={() => props.removePuppy(props.id)} className="remove">
          𝘅
    </span>
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  </div>
);

export default ImageCard;
