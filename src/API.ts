import {shuffleArray} from './utils'
export interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    qustion: string;
    type: string;
}

export interface Answers {
    answers: string[]
} 

export interface QuestionState extends Question, Answers {}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export const fetchQuizQuestion = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer,
        ])
    }))
}

// add interface QuestionState and add processing functionality in fetchQuizQuestion