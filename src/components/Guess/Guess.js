import React from "react";

import { checkGuess } from '../../game-helpers'
import { range } from '../../utils'

function Guess({ guess, answer }) {
    let checkedGuess = checkGuess(guess.letters, answer) || range(0, 5).map(_ => ({ letter: '', status: '' }));

    return (
        <p className="guess">
            {checkedGuess.map((letter, index) => (
                <span className={letter.status ? `cell ${letter.status}` : 'cell'} key={index}>{letter.letter}</span>
            ))}
        </p>
    )
}

export default Guess;
