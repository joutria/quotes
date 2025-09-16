import "./App.css";
import "./styles.css";
import React, { useState, useMemo } from "react";
// Components
import QuoteBox from "./components/QuoteBox";
// Json file with the data
import q from "./quotes.json";
import colors from "./colors.json";

// Starts the function
function App() {
  // States that will be passed to the child components
  const quotes = q.quotes;
  const [index, setIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [color, setColor] = useState("#52006a");
  const [color2, setColor2] = useState("#85603F");
  // Color references from colors.json
  const background = colors.background;
  const font = colors.font;


  // Render function
  return (
    // Parent component
    <div className="App" style={{ backgroundColor: color }}>
      {/* Fisrt Child and all the props that will be passed to this generation and the next ones */}
      <QuoteBox
        setIndex={setIndex}
        setColor={setColor}
        setColor2={setColor2}
        background={background}
        font={font}
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
