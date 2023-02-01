import React from "react";

function Guess({ guess }) {
    return (
        <p className="guess">
            {guess.letters.map((letter, index) => (
                <span className="cell" key={index}>{letter}</span>
            ))}
        </p>
    )
}

export default Guess;
