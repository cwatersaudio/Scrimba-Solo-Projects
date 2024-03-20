import { useState, useEffect } from 'react'
import { decode } from 'he'

import './App.css'

function App() {
  const [begun, setBegun] = useState(false) //state for whether the game has begun
  //state for whether we're answering or showing answers
  const [triviaSet, setTriviaSet] = useState([])
  //method for toggling begun
  //OPTIONAL: State for questions difficulty and corresponding dropdown

  async function getTrivia() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=12&type=multiple')
    const data = await res.json()
    console.log(data)
    const trivia = data.results.map(question => {
      const { correct_answer, incorrect_answers } = question
      return {
        correct: decode(correct_answer),
        options: incorrect_answers.map(answer => decode(answer)), //need to find way to add correct answer 
        question_text: decode(question.question)
      }
    })
    setTriviaSet(trivia)
  }
  console.log(triviaSet);

  //funstion that fetches triva and then sets state

  //question component
  //four choices, styles based on state answered
  return (

    <div className='app--canvas'>
      {/*AI generated */}
      <div className="intro-page">
        <div className="overlap">
          <div className="text-wrapper">Start quiz</div>
          <div className="play-again-button">
            <div className="overlap-group">
              <button type="button" className="div" onClick={getTrivia}>Start quiz</button>
            </div>
          </div>
        </div>
        {/* <img className="blobs" alt="Blobs" src="blobs.svg" />
          <img className="img" alt="Blobs" src="image.svg" /> */}
        <div className="header-nav">
          <div className="text-wrapper-2">Quizzical</div>
        </div>
        <div className="text-wrapper-3">Some description if needed</div>
      </div>

    </div >


  )
}

export default App
