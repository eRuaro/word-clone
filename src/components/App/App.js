import React from 'react';
import Game from '../Game';
import GameGuess from '../GameGuess';
import Header from '../Header';

function App() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    const newGuessArray = [...guesses, guess]
    setGuesses(newGuessArray);
  }

  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <GameGuess guesses={guesses} />
        <Game handleNewGuess={handleNewGuess}/>
      </div>
    </div>
  );
}

export default App;
