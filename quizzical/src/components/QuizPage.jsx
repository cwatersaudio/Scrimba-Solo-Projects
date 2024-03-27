import React from 'react'
import Question from './Question'


const QuizPage = ({ triviaSet, begun }) => {
    const answers = []
    const [showAnswers, setShowAnswers] = React.useState(false)
    const [numberRight, setNumberRight] = React.useState(0)

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
                showAnswers={showAnswers}

            />

        )
    })

    function checkAnswers(answers) {

        setShowAnswers(true)
        getNumberRight(answers)
    }

    function getNumberRight(answers) {
        let rightOnes = 0
        const rightAnswers = triviaSet.map(q => q.correct)
        rightAnswers.forEach((rAnswer, index) => {
            if (rAnswer === answers[index]) {
                rightOnes += 1
            }

        });
        setNumberRight(rightOnes) //why did I need to store this in state?  Why did returning a number from a function not work?
    }

    return (
        <div className="quiz-container">
            {questionsUI}
            {!showAnswers ?
                <button type="button"
                    className="quiz-button"
                    onClick={() => checkAnswers(answers)}>Check Answers
                </button> :
                <div>
                    <p>You got {numberRight}/5 correct!</p>
                    <button type="button"
                        className="quiz-button"
                        onClick={() => checkAnswers(answers)}
                    >Play Again
                    </button>
                </div>}

        </div>

    )
}

export default QuizPage