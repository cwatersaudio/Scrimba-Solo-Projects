import React from 'react'
import Options from './Options'
import Option from './Option'

const Question = ({ question, number, handleChange }) => {
    const allChoices = [...question.options] //had to spread 'options' in otherwise allChoices was being equated to 'options'
    allChoices.splice((allChoices.length + 1) * Math.random() | 0, 0, question.correct) //inserts correct answer at random index
    return (
        <div className="question--container">
            <p className="question">{question.questionText}</p>
            <div className="choices">
                {allChoices.map((option, index) => {
                    <Option

                    />
                }
                {/* <Options
                    options={question.options}
                    number={number}
                    correct={question.correct}
                    id={question.id}
                    handleChange={handleChange}
                /> */}
            </div>
            <hr />
        </div>

    )
}

export default Question