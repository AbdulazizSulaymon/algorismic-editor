import { ChevronRight } from "@mui/icons-material";
import classNames from "classnames";
import React, { memo, MutableRefObject, useEffect, useRef, useState } from "react";
import CollapseWrapper from "./CollapseWrapper";

type Props = {
  title: string;
  children: React.ReactNode | React.ReactNode[];
  onClick?: Function;
  [x: string]: any;
};

function CollapseGroup({ title, children, onClick = () => {}, ...props }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  // const [maxHeight, setMaxHeight]: [number, Function] = useState(0);

  // let refBody: MutableRefObject<HTMLDivElement | null> = useRef(null);

  // useEffect(() => changeMaxHeight(), [maxHeight, isOpen]);

  // const changeMaxHeight = () => setMaxHeight(isOpen ? refBody.current?.scrollHeight : 0);

  // useEffect(() => {
  //   const observer = new ResizeObserver(() => changeMaxHeight());

  //   const items: any = refBody.current?.children;
  //   for (var i = 0; i < items.length; i++) observer.observe(items[i]);
  // }, [refBody.current]);

  return (
    <CollapseWrapper className={classNames({ show: isOpen })} {...props}>
      <div
        className="title"
        onClick={() => {
          setIsOpen((v) => !v);
          onClick();
        }}
      >
        {title || "Group"}
        <ChevronRight />
      </div>
      {/* <div className="collapseBody" ref={refBody} style={{ maxHeight }}> */}
      {isOpen && children}
      {/* </div> */}
    </CollapseWrapper>
  );
}

export default memo(CollapseGroup);
