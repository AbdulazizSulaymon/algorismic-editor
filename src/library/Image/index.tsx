import React from "react";

type Props = {
  src: string | React.ReactNode;
};

export default function Image({ src }: Props) {
  return <img src="/logo.png" />;
}
