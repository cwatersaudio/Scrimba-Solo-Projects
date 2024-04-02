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


        </div>
    )
}

export default IntroPage

