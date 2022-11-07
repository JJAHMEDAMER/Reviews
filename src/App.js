import React from "react";

// Data 
import reviews from "./data"

// Comp
import Card from "./comp/card"
import NavSection from "./comp/navSection";

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Reviews</h1>
      <div className="underline"></div>
      <Card {...reviews[0]}/>
      <NavSection/>
    </div>
  );
}

export default App;
