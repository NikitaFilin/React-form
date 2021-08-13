import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) =>
    props.position ? "space-between" : "center"}; ;
`;

export const InputWrapperLine = styled.div`
  width: 48%;
`;

export const InputStyled = styled.input`
  width: ${(props) => (props.notFull ? "50%" : "100%")};
  height: 50px;

  margin: 10px;
  padding: ${(props) => (props.error ? "14px" : "15px")};
  border: ${(props) => (props.error ? "1px solid red" : "none")};
  background-color: rgb(238, 238, 238);
`;

export const Form = styled.form`
  width: 100%;
`;

export const SelectStyled = styled.select`
  width: 100%;
  height: 50px;

  margin: 10px;
  padding: 15px;
  background-color: rgb(238, 238, 238);
  border: none;
`;

export const ErrorMessage = styled.span`
  margin: -5px 15px 5px;
  font-size: 13px;
  color: red;
`;

export const SubmitButton = styled.input.attrs((props) => ({
  type: props.type,
  value: props.value.toUpperCase(),
}))`
  width: 47%;
  height: 50px;

  margin: 10px;
  background-color: rgb(103, 181, 112);
  color: white;
  border-radius: 5px;
  border: none;

  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;
