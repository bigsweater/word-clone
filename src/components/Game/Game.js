import React from 'react';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults'
import Banner from '../Banner'
import VirtualKeyboard from '../VirtualKeyboard'


function initialState() {
    return {
        answer: sample(WORDS),
        guessIndex: 0,
        gameStatus: 0,
        guessResults: range(0, NUM_OF_GUESSES_ALLOWED)
            .map(() => (
                range(0, 5).map(_ => ({ letter: '', status: '' }))
            ))
    }
}

function Game() {
    const state = initialState();
    const [answer, setAnswer] = React.useState(state.answer)
    console.info({answer: answer})
    const [guessIndex, setGuessIndex] = React.useState(state.guessIndex);
    const [gameStatus, setGameStatus] = React.useState(state.gameStatus)
    const [guessResults, setGuessResults] = React.useState(state.guessResults);

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

    function handleReset() {
        const state = initialState();
        console.info({answer: state.answer})
        setAnswer(state.answer)
        setGuessIndex(state.guessIndex);
        setGameStatus(state.gameStatus);
        setGuessResults(state.guessResults)
    }

    return (
        <>
            <GuessResults guesses={guesses} answer={answer} />
            <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
            <VirtualKeyboard />
            <Banner gameStatus={gameStatus} guessIndex={guessIndex} answer={answer} />
            <Banner gameStatus={gameStatus} guessIndex={guessIndex} answer={answer} handleReset={handleReset} />
        </>
    );
}

export default Game;
