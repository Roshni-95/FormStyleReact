import React, { useState } from "react";

function App() {
  const [headingText, setheadingText] = useState("hello");

  const [mouseover, setMouseOver] = useState(false);

  function handleClick() {
    setheadingText("submitted");
  }

  function handleMouseOver() {
    // console.log("hello");
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseover ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
