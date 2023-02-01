import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import VirtualKeyboard from '../VirtualKeyboard'


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState(
        range(0, NUM_OF_GUESSES_ALLOWED).map(() => ({ letters: '', id: Math.random() }))
    );
    const [guessIndex, setGuessIndex] = React.useState(0);
    const [gameStatus, setGameStatus] = React.useState(0)

    function handleGuess(guess) {
        setGuessIndex(guessIndex + 1)

        if (guessIndex <= NUM_OF_GUESSES_ALLOWED - 1) {
            const nextGuesses = [...guesses]

            nextGuesses.splice(guessIndex, 1, guess)

            setGuesses(nextGuesses)
        }

        if (guessIndex === NUM_OF_GUESSES_ALLOWED - 1) {
            setGameStatus(guess.letters === answer ? 1 : -1)
            return;
        }

        if (guess.letters === answer) {
            setGameStatus(1);
            return;
        }
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
            <VirtualKeyboard />
            <Banner gameStatus={gameStatus} guessIndex={guessIndex} answer={answer} />
        </>
    );
}

export default Game;
