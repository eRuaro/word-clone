function GameGuess({ guesses }) {
    return (
        <div>
            <h1>Guesses</h1>
            <ol>
                {guesses.map((guess, index) => (
                    <li key={index}>{guess}</li>
                ))}
            </ol>
            
        </div>
    )
}

export default GameGuess;