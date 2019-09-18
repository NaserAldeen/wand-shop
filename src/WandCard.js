import React from "react";

function WandCard(props) {
  return (
    <div className="col mt-3 ">
      <div
        className="card mb-5 grow"
        style={{
          width: "20rem",

          borderWidth: "1px",
          borderColor: "black"
        }}
      >
        <img
          src={props.wand.imageUrl}
          className="card-img-top border"
          alt="wand"
        />
        <div className="card-body border text-dark bg-light">
          <h5 className="card-title">Core: {props.wand.core}</h5>
          <p className="card-text">
            Wood: {props.wand.wood}
            <br />
            Length: {props.wand.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WandCard;
