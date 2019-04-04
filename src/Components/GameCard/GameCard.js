import React from "react";
import "./gameCardStyle.css";

function GameCard(props) {
  return (
    <div class="card-container col-md-12">
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
