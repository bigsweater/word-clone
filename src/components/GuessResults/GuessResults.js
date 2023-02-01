import React from "react";
import Guess from '../Guess'

function GuessResults({ guessResults }) {
    return (
        <div className="guess-results">
            {guessResults.map((result, index) => (
                <Guess result={result} key={index} />
            ))}
        </div>
    );
}

export default GuessResults;
