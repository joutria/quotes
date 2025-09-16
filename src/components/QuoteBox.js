import React from "react";
import Quote from "./Quote";

// Starts the function with the given props
function QuoteBox(props) {
  /* Notice that this coponent does not have any states or additional functions by itself,
  they all came from props */

  // Render function
  return (
    // Parent component
    <div className="QuoteBox" style={{ boxShadow: props.color2 }}>
      <Quote
        setIndex={props.setIndex}
        setColor={props.setColor}
        setColor2={props.setColor2}
        background={props.background}
        font={props.font}
        quotes={props.quotes}
        index={props.index}
        color={props.color}
        color2={props.color2}
      />
    </div>
  );
}

export default React.memo(QuoteBox);
