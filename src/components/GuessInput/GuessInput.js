import React from "react";

function GuessInput({ handleGuess }) {
    const [guess, setGuess] = React.useState('');

    function submitGuess(event, guess) {
        event.preventDefault();

        if (guess.length !== 5) {
            return;
        }

        handleGuess({
            label: guess,
            id: Math.ceil(Math.random() * 100000)
        })

        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(e) => submitGuess(e, guess)}>
            <label htmlFor="guess-input">Enter your guess:</label>
            <input
                type="text"
                value={guess}
                id="guess-input"
                minLength={5}
                maxLength={5}
                onChange={(event) => {
                    const guess = event.target.value.toUpperCase().replace(/[^A-Z]/g, '')

                    setGuess(guess)
                }
                } />
        </form>
    );
}

export default GuessInput;
