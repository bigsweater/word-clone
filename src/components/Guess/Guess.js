import React from "react";

function Guess({ guess }) {
function Guess({ guess, answer }) {
    return (
        <p className="guess">
            {guess.letters.map((letter, index) => (
                <span className="cell" key={index}>{letter}</span>
            ))}
        </p>
    )
}

export default Guess;
