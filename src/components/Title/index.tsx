/** @jsxImportSource @emotion/react */
import React from "react";
import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  sm?: boolean;
};

export default function Title({ children, sm, ...props }: Props) {
  return (
    <p
      css={{
        fontSize: (sm && 16) || 20,
        fontWeight: 600,
      }}
      {...props}
    >
      {children}
    </p>
  );
}
