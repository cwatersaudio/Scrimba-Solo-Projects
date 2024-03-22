import React from 'react'
import Options from './Options'

const Question = ({ question, number, handleChange }) => {

    return (
        <div className="question--container">
            <p className="question">{question.questionText}</p>
            <div className="choices">
                <Options
                    options={question.options}
                    number={number}
                    correct={question.correct}
                    id={question.id}
                    handleChange={handleChange}
                />
            </div>
            <hr />
        </div>

    )
}

export default Question