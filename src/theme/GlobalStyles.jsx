import { createGlobalStyle } from 'styled-components';

 
const GlobalStyle = createGlobalStyle`

  :root {
  --primaryColor: #E7E7E7;
  --secondaryColor: #696969;
  --primaryFont: 'Roboto', sans-serif;
  }
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #ffffff;
  }
`;
 
export default GlobalStyle;