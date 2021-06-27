import React, { useState } from "react";
// Img forn one of the buttons
import bird from "../bird.png";

// Starts the function with the given props
function Quote(props) {
  const [text, setText] = useState("");

  // Random Int generator
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // State Updater
  function assign() {
    // Assign the values to the color and the quote
    let idx = getRandomInt(102);
    let col = props.dic[getRandomInt(3)];
    let col2 = props.dic2[getRandomInt(4)];

    // Assign the ? and a deafult value just in case one of the 2 variables is not read
    props.setIndex(idx ? idx : 0);
    props.setColor(col ? col : props.dic[0]);
    props.setColor2(col2 ? col2 : props.dic2[0]);
  }

  // Tweet converter
  function tweet() {
    let txt = props.quotes[props.index].quote.concat(
      ` -${props.quotes[props.index].author}`
    );
    txt = txt.replaceAll(" ", "%20");
    setText(txt);
  }
  // Console logs to verify performance
  console.log(props.index);
  console.log(props.color);
  console.log(props.color2);
  console.log(props.quotes[props.index].quote);
  console.log(props.quotes[props.index].author);
  console.log(text);

  // Render function
  return (
    // Parent component
    <div className="Quote">
      {/* Change thext color */}
      <p className="text" style={{ color: props.color }}>
        {/* Assign the quote */}
        <q>{props.quotes[props.index].quote}</q>
      </p>
      {/* Assign the author */}
      <p className="author">- {props.quotes[props.index].author}</p>
      {/* Twitter button */}
      <div className="buttons">
        <a
          onClick={function () {
            tweet();
          }}
          target="_blank"
          rel="noopener noreferrer"
          href={"https://twitter.com/intent/tweet?text=" + text}
          style={{
            backgroundImage: `url(${bird})`,
            borderColor: props.color,
          }}
          className="twitter a"
        >
          .
        </a>
        {/* Quote Updater button */}
        <button
          style={{ borderColor: props.color }}
          onClick={function () {
            assign();
          }}
        >
          &gt;&gt;
        </button>
      </div>
    </div>
  );
}

export default Quote;
