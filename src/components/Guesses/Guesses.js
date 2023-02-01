import React from "react";
import Guess from '../Guess'

function Guesses({ guesses }) {
    return (
        <div className="guess-results">
            {guesses.map(guess => (
                <Guess guess={guess} key={guess.id} />
            ))}
        </div>
    );
}

export default Guesses;
