import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
    body, html, #root {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        height: 100%;
    }
    a {
        color: ${colors.black};
        text-decoration: none;
    }
`;

export default GlobalStyle;