import styled from "@emotion/styled";
import Button from "components/Button";
import React, { ReactNode, useEffect, useState } from "react";

const TabWrapper = styled.div(({ theme }: any) => ({
  ".header": {
    overflow: "hidden",
    borderRadius: 10,
    background: theme.colors.secondary,

    ".wrapper": {
      overflow: "auto",
      display: "flex",

      ".button": {
        boxShadow: "none",
        borderRadius: 10,
        padding: "10px 12px",
        flex: 1,
      },
    },
  },
}));

type Props = {
  tabs: string[];
  children: ReactNode[];
  onChange?: Function;
};

const Tab = ({ tabs, children, onChange = () => {}, ...props }: Props) => {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {};

  useEffect(() => {
    onChange();
  }, [active]);

  return (
    <TabWrapper {...props}>
      <div className="header">
        <div className="wrapper">
          {tabs.map((item, index) => (
            <Button
              key={item}
              color={active == index ? "primary" : "secondary"}
              onClick={() => setActive(index)}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="body">{children[active]}</div>
    </TabWrapper>
  );
};

export default Tab;
