import React from "react";

import { KEYBOARD_LETTERS } from '../../data';

function VirtualKeyboard() {
    let initialLetters = {};
    KEYBOARD_LETTERS.forEach(letter => {
        initialLetters[letter] = { status: '' }
    });
    const [letters, setLetters] = React.useState(initialLetters)

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
