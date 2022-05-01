import styled from "@emotion/styled";
import React, { ReactNode } from "react";

const StyledButton = styled.div`
  border: none;
  padding: 15px 32px;
  font-size: 20;
  box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  /* transition: 0.05s; */
  /* display: inline-block ; */

  ${(props: any) => {
    switch (props.color) {
      case "secondary":
        return `background-color: ${props.theme.colors.secondary};`;

      default:
        return `background-color: ${props.theme.colors.primary};
                color: white;`;
    }
  }}
`;

type Props = {
  onClick: React.MouseEventHandler;
  children: ReactNode;
  color?: string;
  [x: string]: any;
};

export default function Button({ children, onClick, color = "primary", ...props }: Props) {
  return (
    <StyledButton onClick={onClick} color={color} className="button" {...props}>
      {children}
    </StyledButton>
  );
}
