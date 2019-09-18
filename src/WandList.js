import React from "react";
import WandCard from "./WandCard";

function WandList(props) {
  const wandCards = props.wands.map(item => {
    return <WandCard wand={item} key={item.wood} />;
  });
  return (
    <div className="row jumbotron mt-5" style={{ backgroundColor: "#dddddd" }}>
      {wandCards}
    </div>
  );
}

export default WandList;
