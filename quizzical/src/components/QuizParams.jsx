import React from 'react'

const QuizParams = () => {

    const QuizTopics = ({ className }) => {
        return (
            <div className={className}>
                <label for="trivia_category">Select Category:</label>
                <select name="trivia_category" className='param-input'>
                    <option value="any">Any Category</option>
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
                    <option value="32">Entertainment: Cartoon &amp; Animations</option>
                </select>
            </div>
        )
    }
    const QuizDifficulty = ({ className }) => {
        return (
            <div className={className}>
                <label for="trivia_difficulty">Select Difficulty: </label>
                <select name="trivia_difficulty" className='param-input'>
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>)


    }

    return (
        <div className='quiz-params'>
            <div className='number-param param'>
                <label htmlFor="numberOfQuestions">How many questions?</label>

                <input type="text" className='param-input' inputMode="numeric" id="numberOfQuestions" min="5" max="25" />
            </div>

            <QuizDifficulty
                className='param'
            />
            <QuizTopics
                className='param'
            />


        </div>
    )
}

export default QuizParams

