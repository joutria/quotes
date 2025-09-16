import React from "react";
// Img forn one of the buttons


// Starts the function with the given props
function Quote(props) {


  // Random Int generator

  // State Updater
  function assign() {
    // Assign the values to the color and the quote
    const idx = Math.floor(Math.random() * props.quotes.length);
    const col = props.background[Math.floor(Math.random() * Object.keys(props.background).length)];
    const col2 = props.font[Math.floor(Math.random() * Object.keys(props.font).length)];
    props.setIndex(idx);
    props.setColor(col);
    props.setColor2(col2);
  }

  // Tweet converter
  function tweet() {
    return props.quotes[props.index].quote.concat(
      ` -${props.quotes[props.index].author}`
    ).replaceAll(" ", "%20");
  }


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
          target="_blank"
          rel="noopener noreferrer"
          href={"https://twitter.com/intent/tweet?text=" + tweet()}
          style={{
            backgroundImage: 'url(/twitter-icon.png)',
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

export default React.memo(Quote);
