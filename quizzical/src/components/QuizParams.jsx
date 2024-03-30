import React from 'react'
import Dropdown from './Dropdown'

const QuizParams = ({ handleParamsChange, params }) => {

    const quiztopics = async () => {
        const res = await fetch('https://opentdb.com/api_category.php')
        const data = await res.json()
        const topics = await data.trivia_categories.map(topic => {
            return {
                key: topic.id,
                value: topic.name,
                label: topic.name
            }
        }

        )
        return topics
    }


    const quizdifficulties = async () => {
        const res = await fetch('https://opentdb.com/api_difficulty.php')
        const data = await res.json()
        const difficulties = data.difficulty_list.map(difficulty => {
            return {
                key: difficulty.id,
                value: difficulty.name,
                label: difficulty.name
            }
        }

        )
        return difficulties
    }

    const QuizTopics = ({ className }) => {




        return (
            <div className={className}>
                <label for="category">Select Category:</label>
                <select name="category" className='param-input' onChange={handleParamsChange} value={params.category}>
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

    const difficulties = [
        { value: 'any', label: 'Any Difficulty' },
        { value: 'easy', label: 'Easy' },
        { value: 'medium', label: 'Medium' },
        { value: 'hard', label: 'Hard' },
    ]



    return (
        <form className='quiz-params'>
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

            {/* <Dropdown
                id='topic'
                className='param'
                onChange={handleParamsChange}
                title='Topic'
                dropDownChoices={quiztopics}
                value={params.topic}


            /> */}



        </form>
    )
}

export default QuizParams

