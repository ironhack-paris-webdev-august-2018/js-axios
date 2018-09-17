const feraligatrBtn = document.querySelector(".get-gatr");
const pokemonList = document.querySelector(".pokemon-list");
const pokemonForm = document.querySelector(".pokemon-search");
const inputField = document.querySelector(".pokemon-input");

feraligatrBtn.onclick = () => {
  // charizard 6    pikachu 25
  // jigglypuff 39  mewtwo 150
  console.log("Getting Feraligatr");
  getPokemon(160);
};

pokemonForm.onsubmit = (event) => {
  // normally the page would refresh with a submit event
  // "preventDefault()" STOPS that from happening
  event.preventDefault();

  console.log("Search form SUBMITTED!");

  // get the <input> tag's VALUE (text inside the input)
  const pokeNumber = inputField.value;
  getPokemon(pokeNumber);
};



function getPokemon(pokemonNumber) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
    .then(response => {
      console.log(`Got #${pokemonNumber} SUCCESSFULLY! 🦇`);
      console.log(response.data);

      const { id, name, sprites } = response.data;

      const newLi = document.createElement("li");
      newLi.innerHTML = `
        <h2>${name}</h2>
        <p>Pokemon Number: ${id}</p>
        <img src="${sprites.front_default}" />
      `;
      pokemonList.appendChild(newLi);
    })
    .catch(err => {
      console.log("ERROR 💩");
      console.log(err);
    });
}
