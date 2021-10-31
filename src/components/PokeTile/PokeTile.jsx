import React from "react";
import "./PokeTile.scss";

const PokeTile = (props) => {
  const { pokemon } = props;

  

  return (
    <article className="poke-tile">
      <img src={pokemon.sprites.front_default} alt="pokemon sprite" />
      <h2>{pokemon.name}</h2>
    </article>

  )
};

export default PokeTile;
