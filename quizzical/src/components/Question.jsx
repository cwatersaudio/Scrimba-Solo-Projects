import React from 'react'
import Options from './Options'
import Option from './Option'

const Question = ({ question, number, updateAnswer, showAnswers }) => {
    const allChoices = [...question.options] //had to spread 'options' in otherwise allChoices was being equated to 'options'
    allChoices.splice((allChoices.length + 1) * Math.random() | 0, 0, question.correct) //inserts correct answer at random index





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