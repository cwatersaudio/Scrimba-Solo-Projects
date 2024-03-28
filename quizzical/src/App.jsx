import { useState, useEffect } from 'react'
import { decode } from 'he'
import './App.css'
import QuizPage from './components/QuizPage'
import IntroPage from './components/IntroPage'
import { nanoid } from 'nanoid'
function App() {
  const [begun, setBegun] = useState(false) //state for whether the game has begun
  // const [answering, setAnswering] = useState(true)//state for whether we're answering or showing answers
  const [triviaSet, setTriviaSet] = useState([])



  const [params, setParams] = useState({
    number: 10,
    category: 'any',
    difficulty: 'any'
  })

  function handleParamsChange(e) {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    })
  }


  async function getTrivia() {
    const res = await fetch(`https://opentdb.com/api.php?amount=${params.number}&category=${params.category}&type=multiple`)
    const data = await res.json()
    const trivia = data.results.map(question => {
      const { correct_answer, incorrect_answers } = question
      return {
        correct: decode(correct_answer),
        options: incorrect_answers.map(answer => decode(answer)),
        questionText: decode(question.question),
        id: nanoid()
      }
    })
    setTriviaSet(trivia)
    setBegun(true)
  }

  function restartGame() {
    setBegun(false)
  }


  console.log(triviaSet)

  return (

    <div className='app--canvas'>
      {/*AI generated */}

      {!begun ?
        <IntroPage
          getTrivia={getTrivia}
          handleParamsChange={handleParamsChange}
          params={params}
        />
        :
        <QuizPage
          triviaSet={triviaSet}
          restartGame={restartGame}
        />
      }
    </div >


  )
}

export default App
