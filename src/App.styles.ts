import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    height: 100%;
    }

    body {
    background-size: cover;
    background-color: pink;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
    }

  * {
    font-family: 'Ubuntu';
    box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h1 {
        font-family: "Ubuntu";
        background-image: linear-gradient(180deg, pink, white);
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px hotpink);
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start,
    .next {
        transition: 0.4s ease;
        color: white;
        cursor: pointer;
        font-weight: bold;
        font-size: 1.2rem;
        background: pink;
        border: 2px solid white;
        box-shadow: 0px 5px 10px hotpink;
        border-radius: 10px;
        height: 40px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start: hover,
    .next: hover {
        transform: scale(1.1)
    }

    .start {
        max-width: 200px;
    }

    .start:hover{
        background-image:     linear-gradient(
        to right, 
        #E7484F,
        #E7484F 16.65%,
        #F68B1D 16.65%,
        #F68B1D 33.3%,
        #FCED00 33.3%,
        #FCED00 49.95%,
        #009E4F 49.95%,
        #009E4F 66.6%,
        #00AAC3 66.6%,
        #00AAC3 83.25%,
        #732982 83.25%,
        #732982 100%,
        #E7484F 100%
        
        
        
        );
        animation:slidebg 3.4s linear infinite;
    }
    
    
    @keyframes slidebg {
        to {
        background-position:20vw;
        }
    }

    .follow{
        margin-top: 40px;
    }

    .follow a{
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    }

`;
