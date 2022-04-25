import { ReactChild } from "react";

type Props = {
  src: string | ReactChild;
};

export default function Image({ src }: Props) {
  return <img src="/logo.png" />;
}
