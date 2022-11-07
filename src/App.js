import React from "react";

// Data 
import reviews from "./data"

// Comp
import Card from "./comp/card"

function App() {
  return (
    <div>
      <h1>App Hello World</h1>
      <Card {...reviews[0]}/>
    </div>
  );
}

export default App;
