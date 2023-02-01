import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import Guesses from '../Guesses'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({ letters: ['', '', '', '', ''], id: Math.random() }))
    );
    const [guessCount, setGuessCount] = React.useState(0);

    function handleGuess(guess) {
        if (guessCount === NUM_OF_GUESSES_ALLOWED) {
            console.error('Max guesses reached!');
            return;
        }

        const nextGuesses = [...guesses]

        nextGuesses.splice(guessCount, 1, guess)

        setGuesses(nextGuesses)
        setGuessCount(guessCount + 1)
    }

    return (
        <>
            <Guesses guesses={guesses} />
            <GuessInput handleGuess={handleGuess} />
        </>
    );
}

export default Game;
