import { FC } from "react";
// Types
import { AnswerObject } from "../App";
// Styles
import { Wrapper, AnswerWrapper } from "./QuestionCard.styles";

interface Props {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestion: number;
}

const QuestionCard: FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestion,
}) => (
    <Wrapper>
        <div className='question-block__header'>
            <p className='question-block__header-count'>
                Question: {questionNr} / {totalQuestion}
            </p>
            <p
                className='question-block__header-quest'
                dangerouslySetInnerHTML={{ __html: question }}
            />
        </div>

        <div className='question-block__answers'>
            {answers.map((answer) => (
                <AnswerWrapper
                    className='question-block__answer'
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button
                        className='question-block__answer-btn'
                        disabled={userAnswer ? true : false}
                        onClick={callback}
                        value={answer}
                    >
                        <span
                            className='question-block__answer-text'
                            dangerouslySetInnerHTML={{ __html: answer }}
                        />
                    </button>
                </AnswerWrapper>
            ))}
        </div>
    </Wrapper>
);

export default QuestionCard;
