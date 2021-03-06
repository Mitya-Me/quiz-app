import { useState } from "react";
import { fetchQuizQuestions } from "./API";
//  Components
import QuestionCard from "./components/QuestionCard";
//  Enum
import { Difficulty } from "./API";
//  Interface
import { QuestionState } from "./API";
// Styles
import { GlobalStyle, Wrapper} from "./App.styles";

export interface AnswerObject {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}

const TOTAL_QUESTION = 10;

const App = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    const startTrivia = async () => {
        // Добавить try catch
        setLoading(true);
        setGameOver(false);

        const newQuestion = await fetchQuizQuestions(
            TOTAL_QUESTION,
            Difficulty.EASY
        );

        setQuestions(newQuestion);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            // User answer
            const answer = e.currentTarget.value;
            // Check the user's answer against correct answer
            const correct = questions[number].correct_answer === answer;
            // Add score if answer is correct
            if (correct) setScore((prev) => prev + 1);
            // Save answer in the array for user answers
            const answerObject = {
                question: questions[number].question,
                answer,
                correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers((prev) => [...prev, answerObject]);
        }
    };

    const nextQuestion = () => {
        //Move on to the next question if not the last question
        const nextQuestion = number + 1;

        if (nextQuestion === TOTAL_QUESTION) {
            setGameOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <header className='header'>
                    <h1 className='header__title'> React Quiz </h1>
                    {gameOver || userAnswers.length === TOTAL_QUESTION ? (
                        <button className='header__btn-start' onClick={startTrivia}>
                            Start
                        </button>
                    ) : null}
                </header>

                <div className='content-page'>
                    <div className='content-page__stat'>
                        {!gameOver ? (
                            <p className='content-page__stat-score'>Score:<span>{score}</span></p>
                        ) : null}
                        {loading && <p className='content-page__stat-preload'>Loading Questions...</p>}
                    </div>

                    <div className='content-page__question-block question-block'>
                        {!loading && !gameOver && (
                            <QuestionCard
                                questionNr={number + 1}
                                totalQuestion={TOTAL_QUESTION}
                                question={questions[number].question}
                                answers={questions[number].answers}
                                userAnswer={
                                    userAnswers
                                        ? userAnswers[number]
                                        : undefined
                                }
                                callback={checkAnswer}
                            />
                        )}
                    </div>

                    {!gameOver &&
                    !loading &&
                    userAnswers.length === number + 1 &&
                    number !== TOTAL_QUESTION - 1 ? (
                        <button className='content-page__btn-next' onClick={nextQuestion}>
                            Next Question
                        </button>
                    ) : null}
                </div>
            </Wrapper>
        </>
    );
};

export default App;
