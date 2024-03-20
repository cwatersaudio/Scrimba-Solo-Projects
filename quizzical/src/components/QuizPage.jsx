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



        </div>

    )
}

export default QuizPage