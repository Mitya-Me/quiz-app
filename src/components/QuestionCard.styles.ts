import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1100px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 17px pink;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 800px;
    }

    @media (max-width: 850px) {
        width: 100%;
    }

    @media (max-width: 450px) {
        padding: 10px;
    }

    .question-block__header {
        &-count {
            color: pink;
            font-size: 1.2rem;

            @media (max-width: 450px) {
                margin: 0;
                font-size: 1.1rem;
            }
        }

        &-quest {
            color: hotpink;
            font-size: 1.4rem;
            font-weight: bold;

            @media (max-width: 450px) {
                margin: 5px 0;
                font-size: 1.2rem;
            }
        }
    }
`;

type AnswerWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const AnswerWrapper = styled.div<AnswerWrapperProps>`
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;

    :hover {
        opacity: 0.8;
    }

    .question-block__answer {

        &-btn {
            display: flex;
            justify-content: center;
            padding: 5px 10px;
            transition: all 0.2s ease;
            cursor: pointer;
            user-select: none;
            font-size: 1.5rem;
            width: 80%;
            font-weight: bold;
            margin: 5px 0;
            background: ${({ correct, userClicked }) =>
                correct ? "hotpink" : !correct && userClicked ? "red" : "pink"};
            border: 2px solid #ffffff;
            box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            color: #fff;
            text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

            &:hover {
                text-shadow: 0px 3px 5px hotpink;
            }

            @media (max-width: 450px) {
                font-size: 1.2rem;
            }
        }


        &-text {
            font-family: 'UbuntuMono';
            flex: 0 0 100%;
        }
    }
`;
