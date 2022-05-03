import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #2C2E79;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background: var(--background);
    }
`