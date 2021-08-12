import React from "react";
import { createGlobalStyle } from "styled-components";

import { Form } from "./Components/Form";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
