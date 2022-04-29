import { children, element } from "./types";

export const iteratorChildren = (children: children, callback: any = () => {}) => {
  const getElement = (elem: element) => {
    if (!elem.children) return "";
    return typeof elem.children != "string" ? getContent(elem.children) : elem.children;
  };

  const getElements = (item: element) => {
    callback(item);

    return typeof item === "string"
      ? getElement({ tag: "Text", children: item })
      : getElement(item);
  };

  const getContent = (items: any): any =>
    Array.isArray(items) ? items.map((item) => getElements(item)) : getElements(items);

  return getContent(children);
};
