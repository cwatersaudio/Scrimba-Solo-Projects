import React from 'react'
import QuizParams from './QuizParams'

const IntroPage = (props) => {
    return (
        <div className="intro-page">
            <h1 >Quizzical</h1>
            <h3 >Some description if needed</h3>
            <QuizParams />

            <button type="button" className="quiz-button" onClick={props.getTrivia}>Start quiz</button>
        </div>)
}

export default IntroPage

