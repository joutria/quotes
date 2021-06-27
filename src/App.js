import "./App.css";
import "./styles.css";
import React, { useState } from "react";
// Components
import QuoteBox from "./components/QuoteBox";
// Json file with the data
import { quotes as q } from "./quotes.json";

// Starts the function
function App() {
  // States that will be passed to the child components
  const [quotes, setQuotes] = useState(q);
  const [index, setIndex] = useState(getRandomInt(103));
  const [color, setColor] = useState("#52006a");
  const [color2, setColor2] = useState("#85603F");
  // Dictionaries for the color reference
  const dic = { 0: "#26001B", 1: "#810034", 2: "#FF005C", 3: "#FFF600" };
  const dic2 = { 0: "#85603F", 1: "#9E7540", 2: "#BD9354", 3: "#E3D18A" };

  // Random Int generator
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Render function
  return (
    // Parent component
    <div className="App" style={{ backgroundColor: color }}>
      {/* Fisrt Child and all the props that will be passed to this generation and the next ones */}
      <QuoteBox
        setQuotes={setQuotes}
        setIndex={setIndex}
        setColor={setColor}
        setColor2={setColor2}
        dic={dic}
        dic2={dic2}
        quotes={quotes}
        index={index}
        color={color}
        color2={color2}
      />
      {/* Link with my username to my git hub */}
      <div className="mark">
        <a href="https://github.com/joutria">
          <p>Joutria</p>
        </a>
      </div>
      {/* Aditional block for the background */}
      <div className="marquee2" style={{ color: color2 }}>
        {quotes[index].quote}
      </div>
      <div className="marquee1" direction="right" style={{ color: color2 }}>
        {quotes[index].author}
      </div>
    </div>
  );
}

export default App;
