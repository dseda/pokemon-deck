import React, { Component } from "react";
import pokeball from "./pokeball.jpg";

class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <p className="Pokemon-name">Charmender</p>
        <img className="Pokecard-img" src={pokeball} alt="pokeball" />
        <p>Type: fire</p>
        <p>EXP: 62</p>
      </div>
    );
  }
}

export default Pokecard;
