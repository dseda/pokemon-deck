import React, { Component } from "react";

class NumberGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: false,
      num: 1,
    };
    this.numGen = this.numGen.bind(this);
  }
  //
  numGen(e) {
    let number = Math.floor(Math.random() * 10 + 1);
    if (number === 7) {
      this.setState({ winner: true, num: number });
    } else {
      this.setState({ winner: false, num: number });
    }
  }

  render() {
    return (
      <div>
        <h1>Number is {this.state.num}</h1>

        <h2>
          {this.state.winner ? (
            "you win"
          ) : (
            <button onClick={this.numGen}>Generate random number</button>
          )}
        </h2>
      </div>
    );
  }
}
export default NumberGenerator;
