import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
    background: linear-gradient(45deg, #8e44ad, #3498db);
    font-family: Popins;
    background-attachment: fixed;
}
`

export default GlobalStyle