import React from 'react'
import Question from './Question'


const QuizPage = ({ triviaSet, answering, toggleAnswering, checkAnswers }) => {
    const answers = []

    function updateAnswer(ans, i) {
        answers[i] = ans
        console.log(answers)
    }
    //creates an array of answers to be passed to `checkAnswers`
    //need an id of some kind for the answers to match them to triviaSet

    const questionsUI = triviaSet.map((item, index) => {

        return (
            <Question
                question={item}
                number={index}
                key={item.id}
                updateAnswer={updateAnswer}

            />
        )
    })

    return (
        <div className="quiz-container">
            {questionsUI}
            <button type="button" className="quiz-button" onClick={() => checkAnswers(answers)}>Check Answers</button>

        </div>

    )
}

export default QuizPage