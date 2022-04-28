import React, { DragEventHandler, ReactNode, useContext } from "react";
import Box from "library/Box";
import Button from "library/Button";
import Text from "library/Text";
import Image from "library/Image";
import { element, scheme } from "./types";
import ComponentWrapper from "components/ComponentWrapper";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import ContentWrapper from "./ContentWrapper";
import { Add } from "@mui/icons-material";
import classNames from "classnames";

let isClicked = false;

const prepareAttributes = (attrs: any = {}, elem: element, store: Store) => {
  attrs.style = {
    ...attrs.style,
    ...{
      position: "relative",
    },
  };

  attrs.className = classNames({
    hover: store.selectedElement.attributes.id === attrs.id,
    "element-editor": true,
    [attrs.className]: attrs.className,
  });

  attrs.onClick = () => {
    if (isClicked) return;
    isClicked = true;

    store.selectedElement = elem;

    setTimeout(() => {
      isClicked = false;
    }, 100);
  };

  return attrs;
};

const ContentMaker = observer(() => {
  const store = useContext(StoreContext);
  const { scheme } = store;

  const getElement = (elem: element) => {
    const { tag: Tag, attributes, children } = elem;

    const attrs = prepareAttributes(toJS(attributes), elem, store);

    const allowDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
    };

    const drop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      store.isDragging = false;
      console.log(toJS(store.draggingElement));

      //   e.target.appendChild(document.getElementById(data));
    };

    return (
      //   <ComponentWrapper>
      <>
        <Tag {...attrs} key={attrs.id}>
          {typeof children != "string" ? getContent(children) : children}
        </Tag>
        {store.isDragging && (
          <div
            onDrop={drop}
            onDragOver={allowDrop}
            style={{
              padding: "6px 10px",
              margin: "10px",
              border: "1px solid black",
              borderRadius: 6,
              display: "inline-block",
            }}
          >
            <Add />
          </div>
        )}
      </>
      //   </ComponentWrapper>
    );
  };
  const getElements = (item: element) =>
    typeof item === "string" ? getElement({ tag: "Text", children: item }) : getElement(item);

  const getContent = (items: any): React.ReactNode =>
    Array.isArray(items) ? items.map((item) => getElements(item)) : getElements(items);

  return <ContentWrapper>{getContent(scheme.page.children)}</ContentWrapper>;
});

export default ContentMaker;
