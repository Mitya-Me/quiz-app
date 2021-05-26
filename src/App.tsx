import { useState } from "react"
//Components
import QuestionCard from "./components/QuestionCard"


const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [question, setQuestion] = useState([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    
  }

  const nextQuestion = () => {
    
  }

  return (
    <div className='app'>
      <h1>React Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard
        questionNr={number + 1}
        totalQuestion={TOTAL_QUESTION}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
