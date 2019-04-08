import React from "react";
import "./gameCardStyle.css";



function GameCard(props) {
  return (
    <div className="container">
      <div className="card-container col-md-12">
        <img onClick={() => props.handleClick()} className="card-image" alt={props.name} src={props.image} data-id={props.id}/>
      </div>
    </div>
  );
}

export default GameCard;
