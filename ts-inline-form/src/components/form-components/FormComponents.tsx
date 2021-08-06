import React from 'react';
import styled from 'styled-components';

interface IProps {
  type: string;
  name: string;
  required?: boolean;
  placeholder: string;
}

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  outline: none;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  };
  :focus {
    border: 2px solid red;color
  };
`;

export const FormComponents = ({ type, name, placeholder, required }: IProps) => {
  return <Input type={type} name={name} placeholder={placeholder} required={required} />;
};
