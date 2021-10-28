import React, { Component } from "react";

function pad(id) {
  return id.toString().padStart(3, "0");
}
class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let idPadded = pad(id);
    let src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPadded}.png`;
    return (
      <div className="Pokecard">
        <p className="Pokemon-name">{name}</p>
        <img className="Pokecard-img" src={src} alt="pokemon" />
        <p>Type: {type}</p>
        <p>EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
