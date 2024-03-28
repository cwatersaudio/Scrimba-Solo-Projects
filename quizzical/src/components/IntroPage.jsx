import React from 'react'
import QuizParams from './QuizParams'

const IntroPage = ({ params, handleParamsChange, getTrivia }) => {

    return (
        <div className="intro-page">
            <h1 >Quizzical</h1>
            <h3 >Some description if needed</h3>
            <QuizParams
                params={params}
                handleParamsChange={handleParamsChange}
            />

            <button
                type="button"
                className="quiz-button"
                onClick={getTrivia}>Start quiz</button>
        </div>)
}

export default IntroPage

