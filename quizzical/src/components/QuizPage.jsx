import React from 'react'
import Question from './Question'


const QuizPage = ({ triviaSet, begun }) => {
    const answers = []
    let numberRight
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


        const rightAnswers = triviaSet.map(q => q.correct)
        rightAnswers.forEach((rAnswer, index) => {
            if (rAnswer === answers[index]) {
                numberRight += 1
            }


        });
        console.log(numberRight)
        setShowAnswers(true)
        return numberRight
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