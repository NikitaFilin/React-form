import React from "react";
import styled from "styled-components";

import { InputContainer } from "./InputContainer";

const Wrapper = styled.div`
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* background-color: orange; */
`;

const FormContainer = styled.div`
  min-width: 50%;
  height: 80%;
  /* background-color: pink; */
`;

const Header = styled.h2`
  margin: 10px;
`;

export const Form = () => {
  return (
    <Wrapper>
      <FormContainer>
        <Header>Информация о сотруднике</Header>
        <InputContainer></InputContainer>
        {/* <Button></Button> */}
      </FormContainer>
    </Wrapper>
  );
};
