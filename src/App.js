import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import { quotes as q } from "./quotes.json";

function App() {
  const [quotes, setQuotes] = useState(q);
  const [index, setIndex] = useState(getRandomInt(103));
  const [color, setColor] = useState("#52006a");
  const [color2, setColor2] = useState("#85603F");
  const dic = { 0: "#26001B", 1: "#810034", 2: "#FF005C", 3: "#FFF600" };
  const dic2 = { 0: "#85603F", 1: "#9E7540", 2: "#BD9354", 3: "#E3D18A" };

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className="App" style={{ backgroundColor: color }}>
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
      <div className="mark">
        <a href="https://github.com/joutria"><p>Joutria</p></a>
      </div>
      <marquee className="marquee2" direction="left">{quotes[index].quote}</marquee>
      <marquee className="marquee1" direction="right">{quotes[index].author}</marquee>
    </div>
  );
}

export default App;
