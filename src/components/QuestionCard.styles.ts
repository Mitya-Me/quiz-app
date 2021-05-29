import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 2px 10px hotpink;
    text-align: center;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        width: 800px;
    }
    
    @media (max-width: 830px) {
        width: 99%;
    }

    .number {
        font-size: 1.1rem;
        color: grey;
    }

    .question {
        font-size: 1.3rem;
        color: #555555;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;

    :hover {
        opacity: 0.8;
    }

    button {
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
            correct
                ? "hotpink"
                : !correct && userClicked
                ? "red"
                : "pink"};
        border: 2px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    }

    @media(max-width: 450px) {
        button {
            font-size: 1.2rem;
        }
    }

    button:hover {
        transform: scale(1.02);
        text-shadow: 0px 2px 2px hotpink;
    }
    
    span {
        flex: 0 0 100%;
    }
`;
