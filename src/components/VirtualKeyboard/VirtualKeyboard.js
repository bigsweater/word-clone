import React from "react";

import { KEYBOARD_LETTERS } from '../../data';

function VirtualKeyboard({ guessResults }) {
    let letters = {};
    KEYBOARD_LETTERS.forEach(letter => {
        letters[letter] = { status: '' }
    });
    guessResults.forEach(result => {
        result.forEach(letter => {
            if (!letter.letter) {
                return;
            }

            if (letters[letter.letter].status === 'correct') {
                return;
            }

            letters[letter.letter] = { status: letter.status }
        })
    })

    return (
        <div className="virtual-keyboard">
            {Object.keys(letters).map(letter => (
                <span className={
                    letters[letter].status
                        ? `keycap ${letters[letter].status}`
                        : `keycap`
                } key={letter}>{letter}</span>
            ))}
        </div>
    );
}

export default VirtualKeyboard;
