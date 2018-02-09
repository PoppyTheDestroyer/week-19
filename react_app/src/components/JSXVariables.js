import React from "react";
const name = "Jason";
const letterNumber = 5;
const opinion = "dope";

const JSXVariables = () => (
  <div className="main-container">
    <div className="container">
      <div className="jumbotron">
        <h1>Hi! My name is {name}</h1>
        <h2>My name has {letterNumber} letters.</h2>
        <h2>I think React is {opinion}.</h2>
      </div>
    </div>
  </div>
);

export default JSXVariables;
