import bird from "../bird.png";

function Quote(props) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function assign() {
    // here i assign the values to the color and the quote
    let idx = getRandomInt(102);
    let col = props.dic[getRandomInt(3)];
    let col2 = props.dic2[getRandomInt(4)];
    //in this part y neede to assign  the ? and a deafult value just in case one of the 2 variables is not read
    props.setIndex(idx ? idx : 0);
    props.setColor(col ? col : props.dic[0]);
    props.setColor2(col2 ? col2 : props.dic2[0]);
  }
  console.log(props.index);
  console.log(props.color);
  console.log(props.color2);
  console.log(props.quotes[props.index].quote);
  console.log(props.quotes[props.index].author);

  return (
    <div className="Quote">
      <p className="text" style={{ color: props.color }}>
        <q>{props.quotes[props.index].quote}</q>
      </p>
      <p className="author">- {props.quotes[props.index].author}</p>
      <div className="buttons">
        <a
          style={{
            backgroundImage: `url(${bird})`,
            borderColor: props.color
          }}
          className="twitter a"
        ></a>
        <button style={{borderColor: props.color}}
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
