import React from "react";
import { createGlobalStyle } from "styled-components";

import { Form } from "./Components/Form/Form";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Form />
    </>
  );
}

export default App;
