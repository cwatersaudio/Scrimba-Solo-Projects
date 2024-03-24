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
  //method for toggling begun
  //OPTIONAL: State for questions difficulty and corresponding dropdown

  async function getTrivia() {
    const res = await fetch('https://opentdb.com/api.php?amount=5&category=12&type=multiple')
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

  // function toggleAnswering() {
  //   setAnswering(prev => !prev)
  // }


  console.log(triviaSet)

  return (

    <div className='app--canvas'>
      {/*AI generated */}

      {!begun ?
        <IntroPage
          getTrivia={getTrivia}
        />
        :
        <QuizPage
          triviaSet={triviaSet}
        />
      }
    </div >


  )
}

export default App
