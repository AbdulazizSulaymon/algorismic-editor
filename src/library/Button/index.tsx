import React from "react";

type Props = {
  children: React.ReactNode;
  style: object;
};

export default function Button({ children, style }: Props) {
  return <button style={style}>{children || "Button"}</button>;
}
