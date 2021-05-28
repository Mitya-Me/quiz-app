import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 2px 10px hotpink;
    text-align: center;

    p {
        font-size: 1rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.5s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width: 90%;
        font-weight: bold;
        height: 40px;
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
`;
