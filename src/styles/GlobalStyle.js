import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Roboto', sans-serif;
  }
  
  body {
    margin: 0;
    padding: 0;

  }
`

export default GlobalStyle
