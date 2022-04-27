import React, { ReactNode } from "react";
import Box from "library/Box";
import Button from "library/Button";
import Text from "library/Text";
import Image from "library/Image";
import { element, scheme } from "./types";
import ComponentWrapper from "components/ComponentWrapper";

const ContentMaker = ({ scheme }: { scheme: scheme }) => {
  const getElement = ({ tag: Tag, attributes, children }: element) => (
    <ComponentWrapper>
      <Tag {...attributes}>{typeof children != "string" ? getContent(children) : children}</Tag>
    </ComponentWrapper>
  );

  const getElements = (item: element) =>
    typeof item === "string" ? getElement({ tag: "Text", children: item }) : getElement(item);

  const getContent = (items: any): React.ReactNode =>
    Array.isArray(items) ? items.map((item) => getElements(item)) : getElements(items);

  return <>{getContent(scheme.page.children)}</>;
};

export default ContentMaker;
