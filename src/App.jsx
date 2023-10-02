import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Main } from "./Main";
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <>
    <CookiesProvider>
    <GlobalStyles/>
    <Main/>
    </CookiesProvider>
    
    </>
  );
}

export default App;
