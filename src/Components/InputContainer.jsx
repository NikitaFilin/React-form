import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;

const Span = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
  value: props.name,
  placeholder: props.placeholder,
  //   size: props.size || "100%",
}))`
  height: 40px;
  margin: 10px;
  padding: 15px;
  border: none;

  background-color: rgb(238, 238, 238);

  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;

const InputSmall = styled(Input)`
  width: 50%;
`;

const Button = styled.input.attrs((props) => ({
  type: "button",
  value: props.value.toUpperCase(),
}))`
  width: 47%;
  height: 50px;
  margin: 10px;
  color: white;
  background-color: rgb(103, 181, 112);

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

export const InputContainer = () => {
  return (
    <>
      <Wrapper>
        <Input type="text" id="surname" label="Фамилия" />
        <Input type="text" placeholder="Имя" />
        <Input type="text" placeholder="Отчество" />
        <Span>
          <InputSmall type="text" placeholder="Пол" />
          <InputSmall type="date" placeholder="Дата рождения" />
        </Span>
        <Span>
          <InputSmall type="phone" placeholder="Мобильный телефон" />
          <InputSmall type="text" placeholder="Email (необязательно)" />
        </Span>
        <Input type="adress" placeholder="Адрес постоянной регистрации" />
        <Input type="text" placeholder="Название работодателя" />
      </Wrapper>
      <Span>
        <Button value="Сохранить" />
      </Span>
    </>
  );
};
