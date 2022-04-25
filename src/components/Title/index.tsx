import React, { ReactChild } from "react";
import styled from "@emotion/styled";

const TitleStyled = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

type Props = {
  children: JSX.Element | JSX.Element[] | ReactChild;
};

export default function Title({ children, ...props }: Props) {
  return <TitleStyled {...props}>{children}</TitleStyled>;
}
