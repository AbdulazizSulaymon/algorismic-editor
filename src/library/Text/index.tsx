import { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export default function Text({ children }: Props) {
  return <p>Text</p>;
}
