import React from "react";

type Props = {
  children: React.ReactNode;
  style: object;
  [x: string]: any;
};

const Button: React.FC<Props> = ({ children, style, ...props }) => {
  return (
    <button style={style} {...props}>
      {children || "Button"}
    </button>
  );
};

export default Button;
