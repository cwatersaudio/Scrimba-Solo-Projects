import React from 'react'
import Question from './Question'


const QuizPage = ({ triviaSet }) => {
    const answers = []
    let numberRight = 0
    const [showAnswers, setShowAnswers] = React.useState(false)

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

        const rightAnswers = triviaSet.map(q => q.correct)
        rightAnswers.forEach((answer, index) => {
            if (answer === answers[index]) {
                numberRight += 1
            }


        });
        console.log(numberRight)
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
                        className="quiz-button">Play Again
                    </button>
                </div>}

        </div>

    )
}

export default QuizPage