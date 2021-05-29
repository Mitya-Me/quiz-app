import { FC } from 'react'
// Types
import { AnswerObject } from '../App'
// Styles
import { Wrapper, ButtonWrapper } from './QuestionCard.styles'

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
    totalQuestion
}) => (
    <Wrapper className="wrapper">
        <p className='number'>
            Question: {questionNr} / {totalQuestion}
        </p>
        <p className='question' dangerouslySetInnerHTML={{ __html: question }}/>
        <div >
            {answers.map(answer => (
                <ButtonWrapper
                    key={answer}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button
                        disabled={userAnswer ? true : false}
                        onClick={callback}
                        value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)

export default QuestionCard
