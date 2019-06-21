import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #000;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial, Helvetica, sans-serif;
    display:flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    }
    #root {
      width: 100%;
      height: 100vh;
    }
`;

export default GlobalStyles;
