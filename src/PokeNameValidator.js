import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

function getRandomName() {
  return pokemons[Math.floor(Math.random()) * pokemons.length];
}

export default function PokeNameValidator() {
  const [name, setName] = useState();
  const [correctName, setCorrectName] = useState(getRandomName());

  function onChange(event) {
    const { value } = event.target;
    setName(value.trim());
  }

  useEffect(() => {
    if (name === correctName) {
      alert("Correct! Play again?");
      setName("");
      setCorrectName(getRandomName());
    }
  }, [name, correctName]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{correctName}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        type="text"
        placeholder="Enter the Pokémon name"
        onChange={onChange}
        value={name}
      />
    </div>
  );
}
