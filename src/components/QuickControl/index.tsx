import styled from "@emotion/styled";
import { ArrowDownward, ArrowUpward, ContentCopy, Delete } from "@mui/icons-material";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import StoreContext from "store/StoreContext";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  border-radius: 10px;
  display: flex;
  gap: 10px;
  z-index: 100;
  overflow: hidden;
  transition: 0.3s;
  background-color: #4343df;

  button {
    background-color: transparent;
    color: white;
    padding: 6px 8px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
    top: 0;

    &:hover {
      top: -2px;
    }
  }
`;

type Props = {
  children: React.ReactNode;
};

const QuickControl = observer(() => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const store = useContext(StoreContext);
  const id = toJS(store.selectedElement.attributes.id);
  console.log(id);

  useEffect(() => {
    if (!id) return;

    const elem = document.getElementById(id);
    const rect: any = elem?.getBoundingClientRect() || {};

    console.log(rect.top, rect.left);

    setTop(rect.top || 0);
    setLeft(rect.left || 0);
  }, [id]);

  if (!id) return <></>;

  return createPortal(
    <Wrapper
      id="quickPanel"
      onClick={() => {
        console.log("ComponentWrapper clicked");
      }}
      style={{ top, left }}
    >
      <div className="controls">
        <button>
          <ArrowUpward />
        </button>
        <button>
          <ArrowDownward />
        </button>
        <button>
          <Delete />
        </button>
      </div>
    </Wrapper>,
    document.getElementById("quickPanelWrapper") as Element
  );
});

export default QuickControl;
