import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root {
  --primaryColor: #8C11BE;
  --secondaryColor: #ffffff;
  --terciaryColor: #A328D6;;
  --logoFont: 'Saira Stencil One', cursive;
  --primaryFont: 'Raleway', sans-serif, cursive;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;