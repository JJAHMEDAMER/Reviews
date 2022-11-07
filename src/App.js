import React from "react";

// Data
import reviews from "./data";

// Comp
import Card from "./comp/card";
import NavSection from "./comp/navSection";

function App() {
  const [index, setIndex] = React.useState(0);
  function next() {
    setIndex((prevIndex) => {
      if (prevIndex >= reviews.length - 1) {
        return (prevIndex = 0);
      } else {
        return prevIndex + 1;
      }
    });
  }

  function previous() {
    setIndex((prevIndex) => {
      if (prevIndex <= 0) {
        return (prevIndex = reviews.length - 1);
      } else {
        return prevIndex - 1;
      }
    });
  }

  function random(){
    setIndex(Math.floor(Math.random() * (reviews.length - 0) ) + 0)
  }

  return (
    <div className="app">
      <h1 className="app-title">Reviews</h1>
      <div className="underline"></div>
      <Card {...reviews[index]} />
      <NavSection nextHandle={next} previousHandle={previous} randomHandle={random} />
    </div>
  );
}

export default App;
