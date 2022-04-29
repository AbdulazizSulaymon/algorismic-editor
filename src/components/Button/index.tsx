import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const StyledButton = styled.div`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  margin-top: 20px;
  font-size: 20;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  cursor: pointer;
`;

type Props = {
  onClick: React.MouseEventHandler;
  children: ReactNode;
};

export default function Button({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
