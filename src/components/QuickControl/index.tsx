import styled from "@emotion/styled";
import { ArrowDownward, ArrowUpward, ContentCopy, Delete } from "@mui/icons-material";
import { iteratorChildren } from "components/Editor/iteratorChildren";
import { element } from "components/Editor/types";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { getEmptyElement } from "store/Store";
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

const QuickControl = observer(() => {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  const store = useContext(StoreContext);
  const id = store.selectedElement.attributes.id;
  const fatherId = store.selectedElementFather.attributes.id;

  useEffect(() => {
    if (!id) return;

    const updatePosition = () => {
      const id = store.selectedElement.attributes.id;

      const elem = document.getElementById(id);
      const rect: any = elem?.getBoundingClientRect() || {};

      setTop(rect.top + window.scrollY || 0);
      setLeft(rect.left + window.scrollX || 0);
    };
    updatePosition();

    const domNode: any = document.querySelector("main");
    if (!domNode?.onscroll) domNode.onscroll = updatePosition;
    if (!window.onresize) window.onresize = updatePosition;
  }, [id]);

  const remove = () => {
    iteratorChildren(store.scheme.page.children, (elem: any) => {
      if (elem.attributes.id == fatherId) {
        if (Array.isArray(elem.children)) {
          elem.children.map((item: element, idx: number) => {
            if (item.attributes.id === id) {
              elem.children.splice(idx, 1);
            }
          });
        } else elem.children = "";
      }
    });

    store.selectedElement = getEmptyElement();
    store.selectedElementFather = getEmptyElement();
  };

  if (!id) return <></>;

  return createPortal(
    <Wrapper id="quickPanel" style={{ top, left }}>
      <div className="controls">
        {/* <button>
          <ArrowUpward />
        </button>
        <button>
          <ArrowDownward />
        </button> */}
        <button onClick={remove}>
          <Delete />
        </button>
      </div>
    </Wrapper>,
    document.getElementById("quickPanelWrapper") as Element
  );
});

export default QuickControl;
