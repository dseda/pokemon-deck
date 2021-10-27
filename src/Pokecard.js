import React, { Component } from "react";
import pokeball from "./pokeball.jpg";

class Pokecard extends Component {
  render() {
    return (
      <div>
        <p>Charmender</p>
        <img src={pokeball} alt="pokeball" className="Pokecard-img" />
        <p>Type: fire</p>
        <p>EXP: 62</p>
      </div>
    );
  }
}

export default Pokecard;
