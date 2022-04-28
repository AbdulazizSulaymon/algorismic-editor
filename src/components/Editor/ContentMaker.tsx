import React, { DragEventHandler, ReactNode, useContext } from "react";
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

      // console.log("newElem", newElem);
      // console.log(toJS(elem));
      // console.log(toJS(container));

      if (Array.isArray(container))
        container.map((item, index) => {
          if (item.attributes.id == elem.attributes.id) container.splice(index + 1, 0, newElem);
        });
      else {
        if (typeof container.children == "string")
          container.children = [
            { tag: "span", children: container.children, attributes: { id: store.lastId } },
            newElem,
          ];
        else container.children = [container.children, newElem];
      }
    };

    return (
      //   <ComponentWrapper>
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
      //   </ComponentWrapper>
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
