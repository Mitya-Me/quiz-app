import styled, { createGlobalStyle } from "styled-components";

import UbuntuMonoBold from "./scss/fonts/UbuntuMono-Bold.woff";
import UbuntuMonoRegular from "./scss/fonts/UbuntuMono-Regular.woff";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    border: 0;
}
*,
*:before,
*:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
:focus,
:active {
    outline: none;
}
a:focus,
a:active {
    outline: none;
}
nav,
footer,
header,
aside {
    display: block;
}
html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    font-family: Play;
    color: #26272d;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
    font-family: inherit;
}
input::-ms-clear {
    display: none;
}
button {
    cursor: pointer;
}
button::-moz-focus-inner {
    padding: 0;
    border: 0;
}
a,
a:visited {
    text-decoration: none;
}
a:hover {
    text-decoration: none;
}
ul li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

    @font-face {
        font-family: 'UbuntuMono';
        src: url(${UbuntuMonoRegular});
        font-weight: 400;
        font-display: swap;
        font-style: normal;
    
    @font-face {
        font-family: 'UbuntuMono';
        src: url(${UbuntuMonoBold});
        font-weight: 700;
        font-display: swap;
        font-style: normal;
    }

`;

export const Wrapper = styled.div`
    font-family: "UbuntuMono", "Courier New", sans-serif;
    max-width: 1250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    .header {
        flex: 0 0 100%;

        &__title {
            font-family: "UbuntuMono";
            background-image: linear-gradient(180deg, pink, white);
            font-weight: bold;
            background-size: 100%;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            filter: drop-shadow(2px 2px hotpink);
            font-size: 4rem;
            text-align: center;
            margin: 10px 20px;

            @media (max-width: 450px) {
                font-size: 1.4rem;
            }
        }

        &__btn-start {
            transition: 0.4s ease;
            color: white;
            cursor: pointer;
            font-weight: bold;
            display: block;
            font-size: 1.3rem;
            font-family: inherit;
            background: pink;
            border: 2px solid white;
            box-shadow: 0px 5px 10px hotpink;
            border-radius: 10px;
            height: 40px;
            margin: 10px auto;
            padding: 0 40px;
            max-width: 200px;

            &:hover {
                transform: scale(1.2);
                background-image: linear-gradient(
                    to right,
                    #e7484f,
                    #e7484f 16.65%,
                    #f68b1d 16.65%,
                    #f68b1d 33.3%,
                    #fced00 33.3%,
                    #fced00 49.95%,
                    #009e4f 49.95%,
                    #009e4f 66.6%,
                    #00aac3 66.6%,
                    #00aac3 83.25%,
                    #732982 83.25%,
                    #732982 100%,
                    #e7484f 100%
                );
                animation: slidebg 3.4s linear infinite;
            }
        }
    }

    .content-page {
        display: flex;
        flex-direction: column;
        align-items: center;

        &__stat {
            &-score {
                font-size: 1.6rem;
                color: pink;
                text-align: center;
                margin: 0 0 10px 0;

                @media (max-width: 450px) {
                    font-size: 20px;
                }

                span {
                }
            }

            &-preload {
                color: pink;
                font-family: "UbuntuMono", "Monospace";
            }
        }

        &__btn-next {
            margin-top: 15px;
            font-family: "UbuntuMono";
            font-weight: bold;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 10px pink;
            border-radius: 10px;
            padding: 5px 15px;
            font-size: 1.8rem;
            background: linear-gradient(
                to right,
                #a445b2 50%,
                #ffffff 52%,
                #ff0066 100%
            );
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-size: 80%;
            animation: shine 1.8s ease-in-out infinite;
            -webkit-animation: shine 1.8s ease-in-out infinite;

            @media (max-width: 850px) {
                font-size: 1.5rem;
            }

            @media (max-width: 450px) {
                font-size: 1.2rem;
                margin-top: 10px;
                box-shadow: 0 0 5px pink;
            }
        }
    }

    @keyframes slidebg {
        to {
            background-position: 20vw;
        }
    }

    @keyframes shine {
        0% {
            background-position-x: -500%;
        }
        100% {
            background-position-x: 500%;
        }
    }
`;
