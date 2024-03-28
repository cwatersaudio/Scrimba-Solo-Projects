import React from 'react'

const QuizParams = ({ handleParamsChange, params }) => {

    const QuizTopics = ({ className }) => {

        const getTopicsElements = async () => {
            const optionsHTML
            const res = await fetch('https://opentdb.com/api_category.php')
            const data = await res.json()
            const topicsElements = data.trivia_categories.map(topic => {
                return (
                    <option
                        key={topic.id}
                        value={topic.id}
                    >
                        {topic.name}
                    </option>
                )
            })

            return
        }


        return (
            <div className={className}>
                <label for="category">Select Category:</label>
                <select name="category" className='param-input' onChange={handleParamsChange} value={params.category}>
                    {/* <option value="any">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science &amp; Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                    <option value="32">Entertainment: Cartoon &amp; Animations</option> */}
                    {getTopicsElements
                    }


                </select>
            </div>
        )
    }
    const QuizDifficulty = ({ className }) => {
        return (
            <div className={className}>
                <label for="difficulty">Select Difficulty: </label>
                <select name="difficulty" className='param-input' onChange={handleParamsChange} value={params.difficulty}>
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>)


    }

    return (
        <form className='quiz-params'>
            <div className='number-param param'>
                <label htmlFor="numberOfQuestions">How many questions?</label>

                <input type="text" className='param-input' inputMode="numeric" id="numberOfQuestions" min="5" max="25" onChange={handleParamsChange} value={params.number} name="number" />
            </div>

            <QuizDifficulty
                className='param'
            />
            <QuizTopics
                className='param'
            />


        </form>
    )
}

export default QuizParams

