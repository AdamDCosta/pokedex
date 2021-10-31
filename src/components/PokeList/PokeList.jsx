import React from 'react';
import PokeTile from '../PokeTile/PokeTile';
import "./PokeList.scss"

const PokeList = (props) => {

  const { pokedex } = props;

  console.log(pokedex[1])

 
    const pokeListJSX = pokedex.map((pokemon, index) => {
      return <PokeTile key={pokemon.name + (index + 1)} pokemon = { pokemon } />
    }) 

  

  console.log({pokeListJSX})

  return (
    <section className="poke-list">
      {pokeListJSX}
    </section>
  )
}

export default PokeList
