import { useState, useEffect } from 'react'
import { decode } from 'he'
import './App.css'
import QuizPage from './components/QuizPage'
import IntroPage from './components/IntroPage'
import { nanoid } from 'nanoid'
function App() {
  const [begun, setBegun] = useState(false) //state for whether the game has begun
  const [triviaSet, setTriviaSet] = useState([])



  const [params, setParams] = useState({
    number: 10,
    category: 9,
    difficulty: 'any'
  })

  function handleParamsChange(e) {
    setParams({
      ...params,
      [e.target.name]: e.target.value
    })
  }


  async function getTrivia() {
    const fetchURL = `https://opentdb.com/api.php?amount=${params.number}&category=${params.category}&difficulty=${params.difficulty}&type=multiple`
    const res = await fetch(fetchURL)
    const data = await res.json()
    console.log(data)
    console.log(fetchURL)
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
  console.log(params)

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
