

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body, html {
    min-width: 100%;
    min-height: 100vh;
    
    }

    body {
        font-family: Montserrat;
      margin: 0;
    height: 100vh;
    
    
    }
    
   
    img {
        max-width: 100%;
        display: block;
    }
  
    a {
      color: inherit;
      text-decoration: none;
    }
`

export default GlobalStyles
