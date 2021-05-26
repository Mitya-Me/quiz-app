import { FC } from 'react'

interface Props {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
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
    <div>
        <p className='number'>
            Qustion: {questionNr} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }}/>
        <div>
            {answers.map(answer => (
                <div>
                    <button disabled={userAnswer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
)

export default QuestionCard