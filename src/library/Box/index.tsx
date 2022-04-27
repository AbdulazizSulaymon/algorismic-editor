import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Box({ children }: Props) {
  return <div>{children}</div>;
}
