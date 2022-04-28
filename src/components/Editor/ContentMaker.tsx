import React, { DragEventHandler, useContext, useEffect } from "react";
import { element } from "./types";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import ContentWrapper from "./ContentWrapper";
import { Add } from "@mui/icons-material";
import classNames from "classnames";
import { iteratorChildren } from "./iteratorChildren";
import QuickControl from "components/QuickControl";

let countClicks = 0;

const prepareAttributes = (attrs: any = {}, elem: element, store: Store) => {
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

const ContentMaker = observer(() => {
  const store = useContext(StoreContext);
  const { scheme } = store;

  const getElement = (elem: element, container: any) => {
    const { tag: Tag, attributes, children } = elem;

    const attrs = prepareAttributes(toJS(attributes), elem, store);

    const allowDrop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
    };

    const drop: DragEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();

      store.isDragging = false;
      const newElem = toJS(store.draggingElement);

      iteratorChildren(newElem, (elem: element) => {
        if (!elem.attributes) elem.attributes = {};
        elem.attributes.id = `id${store.lastId++}`;
      });

      const domNode = document.getElementById(elem.attributes.id);
      domNode?.click();

      setTimeout(() => {
        console.log("selectedElementFather id", toJS(store.selectedElementFather.attributes.id));
        console.log(toJS(store.selectedElementFather));

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
        <Tag {...attrs} key={attrs.id}>
          {typeof children != "string" ? getContent(children, children) : children}
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
    );
  };

  const getElements = (item: element, container: element[]) =>
    typeof item === "string"
      ? getElement({ tag: "span", children: item, attributes: { id: store.lastId } }, container)
      : getElement(item, container);

  const getContent = (items: any, container: any): React.ReactNode => {
    return Array.isArray(items)
      ? items.map((item) => getElements(item, items))
      : getElements(items, container);
  };

  // scheme.page.children = [{ tag: "div", children: scheme.page.children }];

  return (
    <ContentWrapper>
      {getContent(
        scheme.page.children,
        Array.isArray(scheme.page.children) ? scheme.page.children : scheme.page
      )}
      <QuickControl />
    </ContentWrapper>
  );
});

export default ContentMaker;
