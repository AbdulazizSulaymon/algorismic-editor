import React, { DragEventHandler, useContext, useEffect } from "react";
import { element } from "../types";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import ContentWrapper from "./ContentWrapper";
import { Add } from "@mui/icons-material";
import classNames from "classnames";
import { iteratorChildren } from "../iteratorChildren";
import QuickControl from "components/QuickControl";
import styled from "@emotion/styled";
import { isBlockElement, isEmptyTag } from "../ComponentsPanel/ElementMaker";

let countClicks = 0;

const prepareAttributes = (attrs: any = {}, elem: element, store: Store) => {
  attrs.style = { ...attrs.style };
  if (store.isDragging) {
    attrs.style.border = "1px solid silver";
  }

  attrs.className = classNames({
    hover: store.selectedElement.attributes.id === attrs.id,
    "element-editor": true,
    [attrs.className]: attrs.className,
  });

  attrs.onClick = () => {
    if (countClicks == 2) return;
    countClicks++;

    if (countClicks == 1) store.selectedElement = elem;
    else if (countClicks == 2) store.selectedElementFather = elem;

    setTimeout(() => {
      countClicks = 0;
    }, 100);
  };

  return attrs;
};

const DropZone = styled.div`
  padding: 3px 5px;
  margin: 3px;
  border: 1px solid black;
  border-radius: 4px;
  display: inline-block;
  font-size: 14px;
`;

const ContentMaker = observer(() => {
  const store = useContext(StoreContext);
  const { scheme } = store;

  useEffect(() => {
    if (Array.isArray(scheme.page.children) && scheme.page.children.length)
      store.selectedElement = scheme.page.children[0];
  }, [scheme.page]);

  const getElement = (elem: element) => {
    if (elem == undefined) return <></>;

    const { tag: Tag, attributes } = elem;
    const children = elem.children || "";

    const attrs = prepareAttributes(toJS(attributes), elem, store);

    const allowDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
    };

    const drop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      store.isDragging = false;
      const newElem = toJS(store.draggingElement);

      iteratorChildren(newElem, (item: element) => {
        if (!item) return;
        console.log(item);

        if (!item.attributes) item.attributes = {};
        item.attributes.id = `id${store.lastId++}`;
      });

      const domNode = document.getElementById(elem.attributes.id);
      domNode?.click();

      setTimeout(() => {
        let children: any = store.selectedElementFather.children;
        if (Array.isArray(children)) {
          children.map((item, idx) => {
            if (item.attributes.id == store.selectedElement.attributes.id) {
              children.splice(idx + 1, 0, newElem);
            }
          });
        } else {
          store.selectedElementFather.children = [children, newElem];
        }
      }, 100);
    };

    return (
      <>
        {!isEmptyTag(Tag) ? (
          <Tag {...attrs} key={attrs.id}>
            {typeof children != "string" ? getContent(children) : children}
          </Tag>
        ) : (
          <Tag {...attrs} key={attrs.id} />
        )}
        {store.isDragging && (
          <DropZone onDrop={drop} onDragOver={allowDrop}>
            <Add />
          </DropZone>
        )}
      </>
    );
  };

  const getElements = (item: element) =>
    typeof item === "string"
      ? getElement({ tag: "span", children: item, attributes: { id: store.lastId } })
      : getElement(item);

  const getContent = (items: any): React.ReactNode => {
    return Array.isArray(items) ? items.map((item) => getElements(item)) : getElements(items);
  };

  return (
    <ContentWrapper>
      {getContent(scheme.page.children)}
      <QuickControl />
    </ContentWrapper>
  );
});

export default ContentMaker;
