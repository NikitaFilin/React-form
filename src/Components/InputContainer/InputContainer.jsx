import React, { useState } from "react";
import { Input } from "./Input";

import {
  InputWrapper,
  Form,
  SelectStyled,
  SubmitButton,
  InputWrapperLine,
  ErrorMessage,
} from "./styled";

export const InputContainer = () => {
  const [inputs, setInputs] = useState({
    lastName: "",
    firstName: "",
    surname: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
    adress: "",
    department: "",
  });
  const [errors, setErrors] = useState({});

  function validateEmail(email) {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    const re = /^\d[\d\(\)\ -]{4,14}\d$/;
    return re.test(String(phone).toLowerCase());
  }

  const validateForm = () => {
    const newErrors = {};

    for (let key in inputs) {
      switch (key) {
        case "lastName":
        case "firstName":
          if (inputs[key] === "") {
            newErrors[key] = "Поле является обязательным";
          }
          break;
        case "email":
          if (inputs[key] === "") {
            newErrors[key] = "Поле является обязательным";
          } else if (validateEmail(inputs[key]) === false) {
            newErrors[key] = "Введен некорректный адрес почты";
          }
          break;

        case "phone":
          if (inputs[key] === "") {
            newErrors[key] = "Поле является обязательным";
          } else if (validatePhone(inputs[key]) === false) {
            newErrors[key] = "Введен некорректный номер";
          }
          break;
        case "birthday":
          if (inputs[key] === "") {
            newErrors[key] = "Поле является обязательным";
          }
          break;

        default:
          break;
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Форма валидна, отправляется запрос");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    return;
  };

  const handleChange = (e) => {
    const {
      target: { value, name },
    } = e;
    setInputs((prev) => {
      prev[name] = value;
      return prev;
    });
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <InputWrapper>
        <Input
          name="lastName"
          type="text"
          placeholder="Фамилия*"
          onChange={handleChange}
          error={errors.lastName}
        />
        <ErrorMessage>{errors.lastName}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Input
          name="firstName"
          type="text"
          placeholder="Имя*"
          onChange={handleChange}
          error={errors.firstName}
        />
        <ErrorMessage>{errors.firstName}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Input
          name="surname"
          type="text"
          placeholder="Отчество"
          onChange={handleChange}
        />
      </InputWrapper>

      <InputWrapper row position>
        <InputWrapperLine>
          <SelectStyled name="gender">
            <option value="man">Мужской</option>
            <option value="woman">Женский</option>
          </SelectStyled>
        </InputWrapperLine>
        <InputWrapperLine>
          <Input
            name="birthday"
            type="date"
            placeholder="Дата рождения*"
            onChange={handleChange}
            error={errors.birthday}
          />
          <ErrorMessage>{errors.birthday}</ErrorMessage>
        </InputWrapperLine>
      </InputWrapper>

      <InputWrapper row position>
        <InputWrapperLine>
          <Input
            name="phone"
            type="phone"
            placeholder="Мобильный телефон*"
            onChange={handleChange}
            error={errors.phone}
          />
          <ErrorMessage>{errors.phone}</ErrorMessage>
        </InputWrapperLine>
        <InputWrapperLine>
          <Input
            name="email"
            type="text"
            placeholder="Email*"
            onChange={handleChange}
            error={errors.email}
          />
          <ErrorMessage>{errors.email}</ErrorMessage>
        </InputWrapperLine>
      </InputWrapper>

      <InputWrapper>
        <Input
          name="adress"
          type="adress"
          placeholder="Адрес постоянной регистрации"
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          name="department"
          type="text"
          placeholder="Название работодателя"
          onChange={handleChange}
        />
      </InputWrapper>

      <SubmitButton type="submit" value="Сохранить" />
    </Form>
  );
};
