import React from "react";
import styled from "styled-components";

import { InputContainer } from "./InputContainer";

const Wrapper = styled.div`
  max-width: 65%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const FormContainer = styled.div`
  width: 65%;
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
      </FormContainer>
    </Wrapper>
  );
};
