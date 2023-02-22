import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game({ handleNewGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleGuessSubmit(event) {
    event.preventDefault();
    console.log("submitted: ", guess);
    handleNewGuess(guess);
    setGuess('');
  }

  function handleGuessChange(event) {
    const guessChange = event.target.value;
    setGuess(guessChange.toUpperCase());
    console.log(guess);
  }

  return (
    <form class="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={handleGuessChange} />
    </form>
  )
}

export default Game;
