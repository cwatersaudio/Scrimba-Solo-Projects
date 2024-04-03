import React from 'react'
import Dropdown from './Dropdown'

const QuizParams = ({ handleParamsChange, params, getTrivia }) => {
    const [quizTopics, setQuizTopics] = React.useState([])


    async function getTopics() {
        const res = await fetch('https://opentdb.com/api_category.php')
        const data = await res.json()
        console.log(data)
        const topics = data.trivia_categories.map(topic => {
            return {
                key: topic.id,
                value: topic.id,
                label: topic.name
            }
        })
        return topics
    }

    React.useState(() => {
        getTopics().then(topics => {
            setQuizTopics(topics)
        })
    }, [])


    const difficulties = [
        { value: '', label: 'Any Difficulty' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ]



    return (
        <form className='quiz-params'
        // onSubmit={getTrivia}
        >
            <div className='number-param param'>
                <label htmlFor="numberOfQuestions">How many questions?</label>

                <input type="text" className='param-input' inputMode="numeric" id="numberOfQuestions" min="5" max="25" onChange={handleParamsChange} value={params.number} name="number" />
            </div>

            <Dropdown
                id='difficulty'
                className='param'
                onChange={handleParamsChange}
                title='Difficulty'
                dropDownChoices={difficulties}
                value={params.difficulty}
            />

            <Dropdown
                id='category'
                className='param'
                onChange={handleParamsChange}
                title='Topic'
                dropDownChoices={quizTopics}
                value={params.category.id}
            />
            <button
                type="button"
                className="quiz-button"
                onClick={getTrivia}
            >Start quiz</button>
        </form>
    )
}

export default QuizParams

