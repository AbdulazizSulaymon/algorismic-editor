import { ReactChild } from "react";

type Props = {
  children: ReactChild;
};

export default function Box({ children }: Props) {
  return <div>Box</div>;
}
