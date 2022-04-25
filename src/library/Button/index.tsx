import { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export default function Button({ children }: Props) {
  return <button>Button</button>;
}
