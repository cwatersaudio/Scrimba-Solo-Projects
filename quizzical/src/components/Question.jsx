import React from 'react'
import Options from './Options'
import Option from './Option'

const Question = ({ allChoices, question, number, updateAnswer, showAnswers }) => {

    return (
        <div className="question--container">
            <p className="question">{question.questionText}</p>
            <div className="choices">

                <Options
                    allChoices={allChoices}
                    number={number}
                    correct={question.correct}
                    id={question.id}
                    updateAnswer={updateAnswer}
                    showAnswers={showAnswers}
                />
            </div>
            <hr />
        </div>

    )
}

export default Question