import React from 'react';
import PokeList from '../../components/PokeList/PokeList';

const Home = (props) => {

  const { pokedex } = props;

  console.log(pokedex)

  // console.log(pokedex[0].sprites)

  // const pokeNameJSX = pokedex.map(pokemon => {
  //   return <p>{pokemon.name}</p>
  // })

  

  return (
    <section>
      <PokeList pokedex={pokedex}/>
    </section>
  )
}

export default Home
