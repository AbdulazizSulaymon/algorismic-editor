import React, { ReactNode, useContext } from "react";
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

let isClicked = false;

const prepareAttributes = (attrs: any = {}, elem: element, store: Store) => {
  attrs.style = {
    ...attrs.style,
    ...{
      position: "relative",
    },
  };

  attrs.className = `${attrs.className ?? ""} element-editor`;

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

    return (
      //   <ComponentWrapper>
      <Tag {...attrs} key={attrs.id}>
        {typeof children != "string" ? getContent(children) : children}
      </Tag>
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
