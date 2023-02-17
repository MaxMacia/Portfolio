import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    body, html, #root {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        height: 100%;
    }
    a {
        display: block;
        color: ${colors.black};
        text-decoration: none;
        height: fit-content;
    }
`;

export default GlobalStyle;