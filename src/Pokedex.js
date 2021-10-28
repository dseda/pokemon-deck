import React, { Component } from "react";
import PokeCard from "./Pokecard";
import Pokemons from "./Pokemons";

class Pokedex extends Component {
  render() {
    return (
      <div className="Pokedex">
        {Pokemons.map((obj) => {
          return (
            <PokeCard
              id={obj.id}
              name={obj.name}
              type={obj.type}
              base_experience={obj.base_experience}
            />
          );
        })}
      </div>
    );
  }
}

export default Pokedex;
