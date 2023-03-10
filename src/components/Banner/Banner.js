import React from "react";

function Banner({ gameStatus, guessIndex, answer, handleReset }) {
    return (
        <>
            {gameStatus === 1 && (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in{' '}
                        <strong>{guessIndex} {guessIndex > 1 ? 'guesses' : 'guess'}</strong>.
                    </p>
                    <p>
                        <button onClick={handleReset}>Play Again?</button>
                    </p>
                </div>
            )}
            {gameStatus === -1 && (
                <div className="sad banner">
                    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
                    <p>
                        <button onClick={handleReset}>Play Again?</button>
                    </p>
                </div>
            )}
        </>
    );
}

export default Banner;
