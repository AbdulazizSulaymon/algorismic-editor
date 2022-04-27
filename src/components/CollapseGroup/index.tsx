import { ChevronLeft, ChevronRight, KeyboardArrowDown } from "@mui/icons-material";
import classNames from "classnames";
import React, { useState } from "react";
import CollapseWrapper from "./CollapseWrapper";

type Props = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
};

export default function CollapseGroup({ title, children }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <CollapseWrapper className={classNames({ show: isOpen })}>
      <div className="title" onClick={() => setIsOpen((v) => !v)}>
        {title || "Group"}
        <ChevronRight />
      </div>
      {isOpen && children}
    </CollapseWrapper>
  );
}
