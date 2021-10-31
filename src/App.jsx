import "./App.scss";
import React, { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./containers/Home/Home";

const App = () => {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const pokeArray = [];

    
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
    .then((response) => {
      return response.json();
    })
    .then((allPokemon) => {
      allPokemon.results.forEach((pokemon) => {
        getPokemonData(pokemon);
      });
    });
    
    setPokedex(pokeArray);
    
    const getPokemonData = (pokemon) => {
      let url = pokemon.url;
      fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((pokeData) => {
        if (pokeData) {
          let pokeObj = pokeData;
          pokeArray.push(pokeObj);
        }
      });
    };

  }, []);

 

  return (
    <div className="App">
      <Nav />
      <h1>POKEDEX</h1>
      <Home pokedex={pokedex}/>
    </div>
  );
};

export default App;
