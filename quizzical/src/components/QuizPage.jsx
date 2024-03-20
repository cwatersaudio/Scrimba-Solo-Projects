import React from 'react'
import Question from './Question'


const QuizPage = ({ triviaSet, answering, toggleAnswering }) => {


    const questionsUI = triviaSet.map((item, index) => {
        return (
            <Question
                question={item}
                number={index}
            />
        )
    })

    return (
        <div className="quiz-container">
            {questionsUI}
            <button type="button" className="quiz-button">Check Answers</button>

        </div>

    )
}

export default QuizPage