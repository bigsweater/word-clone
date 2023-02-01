import React from "react";

function Guess({ result }) {
    return (
        <p className="guess">
            {result.map((letter, index) => (
                <span className={letter.status ? `cell ${letter.status}` : 'cell'} key={index}>{letter.letter}</span>
            ))}
        </p>
    )
}

export default Guess;
