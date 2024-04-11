import React from "react";
import ReactDOM from "react-dom";

const style = {
  color: "white",
  backgroundColor: "blue",
  fontFamily: "Arial",
  border: "3px dotted green",
};
style.color = "yellow";

ReactDOM.render(
  <div>
    <h1
      style={{ color: "red", fontFamily: "Cursive", backgroundColor: "pink" }}
    >
      Hello World!
    </h1>
    <h4 style={style}>Bem vindo Ricardo Carvalho </h4>
  </div>,
  document.getElementById("root")
);
