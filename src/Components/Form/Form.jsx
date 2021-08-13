import React from "react";

import { Wrapper, FormContainer, Header } from "./styled";
import { InputContainer } from "../InputContainer/InputContainer";

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
