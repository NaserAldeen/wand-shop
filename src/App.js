import React from "react";
import "./App.css";
import WandList from "./WandList";
import wands from "./wand.js";

function App() {
  return (
    <div className="App container">
      <h1 className="mt-5 text-dark" style={{ fontSize: "70px" }}>
        The Wand Shop
      </h1>
      <WandList wands={wands} />
    </div>
  );
}

export default App;
