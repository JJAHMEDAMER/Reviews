import React from "react";

// Data 
import reviews from "./data"

// Comp
import Card from "./comp/card"

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Reviews</h1>
      <div className="underline"></div>
      <Card {...reviews[0]}/>
    </div>
  );
}

export default App;
