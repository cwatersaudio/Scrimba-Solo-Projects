import React from 'react'
import Options from './Options'

const Question = ({ question, number }) => {

    return (
        <div className="question--container">
            <p className="question">{question.questionText}</p>
            <div className="choices">
                <Options
                    options={question.options}
                    number={number}
                    correct={question.correct}
                />
            </div>
            <hr />
        </div>

    )
}

export default Question