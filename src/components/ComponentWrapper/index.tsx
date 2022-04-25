import styled from "@emotion/styled";
import React, { ReactChild } from "react";

const Wrapper = styled.div`
  &:hover {
    border: 1px solid blue;
    border-radius: 2px;
    padding: 4px;
    transition: 0.2s;
  }
`;

type Props = {
  children: JSX.Element | JSX.Element[] | ReactChild;
};

export default function ComponentWrapper({ children }: Props) {
  return (
    <Wrapper
      onClick={() => {
        console.log("clicked");
        console.log(children);
      }}
    >
      {children}
    </Wrapper>
  );
}
