import React, { Component } from "react";
import PokeCard from "./Pokecard";
class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </div>
    );
  }
}

export default Pokedex;
