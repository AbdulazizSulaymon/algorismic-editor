import styled from "@emotion/styled";
import { ContentCopy, Delete } from "@mui/icons-material";
import React from "react";

const Wrapper = styled.div`
  border: 1px solid transparent;
  position: relative;
  /* display: ; */

  .controls {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    padding: 10px 12px;
    background-color: #4343df;
    border-radius: 2px;
    display: flex;
    gap: 10px;
    opacity: 0;
    transition: 0.1s;
  }

  &:hover {
    border: 1px solid blue;
    border-radius: 2px;
    transition: 0.2s;

    & > .controls {
      opacity: 1;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

export default function ComponentWrapper({ children }: Props) {
  return (
    <Wrapper
      onClick={() => {
        console.log("ComponentWrapper clicked");
        console.log(children);
      }}
    >
      <div className="controls">
        <button className=".btn">
          <ContentCopy />
        </button>
        <button className=".btn">
          <Delete />
        </button>
      </div>
      {children}
    </Wrapper>
  );
}
