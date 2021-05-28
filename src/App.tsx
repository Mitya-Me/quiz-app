import { useState } from "react"
import { fetchQuizQuestions } from "./API";
//  Components
import QuestionCard from "./components/QuestionCard"
//  Enum
import { Difficulty } from "./API"
//  Interface
import { QuestionState } from "./API"

interface AnswerObject  {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTION = 10;

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)

  const startTrivia = async () => {
    // Добавить try catch
    setLoading(true)
    setGameOver(false)

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    )

    setQuestions(newQuestion)
    setScore(0)
    setUserAnswers([])
    setNumber(0);
    setLoading(false)

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
      {/* <QuestionCard
        questionNr={number + 1}
        totalQuestion={TOTAL_QUESTION}
        question={question[number].question}
        answers={question[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
