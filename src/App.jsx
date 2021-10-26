import "./App.scss";

const App = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=150")
    .then((response) => {
      return response.json();
    })
    .then(allPokemon => {
      console.log(allPokemon);
      allPokemon.results.forEach(pokemon => {
        getPokemonData(pokemon);
      })
    });

    const getPokemonData = (pokemon) => {
      let url = pokemon.url
      fetch(url).then(response => {
        return response.json()
      })
      .then(pokeData => {
        console.log(pokeData);
      })
    }

  return <div className="App">
    <h1>POKEDEX</h1>
  </div>;
};

export default App;
