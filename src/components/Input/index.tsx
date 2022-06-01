import styled from "@emotion/styled";
import React from "react";

const StyledInput = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  flex: 1;
  width: 100%;
  max-width: 300px;

  label {
    margin-bottom: 4px;
    display: block;
  }
  input {
    padding: 10px;
    border: none !important ;
    outline: none !important ;
    border-radius: 4px;
    min-width: 30px;
    width: 100%;
  }
`;

type Props = {
  value: string | number;
  label: string;
  name: string;
  type?: string;
  onChange?: React.ChangeEventHandler;
  placeholder?: string;
};

export default function Input({
  value,
  type = "text",
  label,
  name,
  placeholder = "",
  onChange,
}: Props) {
  const id = `id-${name}`;
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ padding: type === "color" ? 0 : "auto" }}
      />
    </StyledInput>
  );
}
