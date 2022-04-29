import Title from "components/Title";
import { element } from "./types";
import { observer } from "mobx-react";
import { DragEvent, memo, useContext, useEffect } from "react";
import StoreContext from "store/StoreContext";
import { iteratorChildren } from "./iteratorChildren";
import { toJS } from "mobx";

const blockElements = [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "div",
  "ol",
  "ul",
  "pre",
  "address",
  "blockquote",
  "dl",
  "div",
  "fieldset",
  "form",
  "hr",
  "noscript",
  "table",
];

const emptyTags = ["br", "hr", "img", "input", "link", "meta", "source"];

export const isBlockElement = (tag: string) => blockElements.includes(tag);
export const isEmptyTag = (tag: string) => emptyTags.includes(tag);

const ElementMaker = observer(({ elem }: { elem: element }) => {
  const store = useContext(StoreContext);

  const drag = (e: DragEvent<HTMLDivElement>) => {
    store.draggingElement = elem;
    store.isDragging = true;
  };

  const dragEnd = (e: DragEvent<HTMLDivElement>) => {
    store.isDragging = false;
  };

  const getElement = (elem: element) => {
    if (elem == undefined) return <></>;

    const { tag: Tag, attributes } = elem;
    const children = elem.children || "";

    const attrs = toJS(attributes);
    // attrs.draggable = true;
    // attrs.onDragStart = drag;

    if (!isEmptyTag(Tag))
      return (
        <Tag {...attrs} key={attrs.id}>
          {typeof children != "string" ? getContent(children) : children}
        </Tag>
      );
    else return <Tag {...attrs} key={attrs.id} />;
  };

  const getElements = (item: element) =>
    typeof item === "string" ? getElement({ tag: "Text", children: item }) : getElement(item);

  const getContent = (items: any): React.ReactNode =>
    Array.isArray(items) ? items.map((item) => getElements(item)) : getElements(items);

  return (
    <div>
      <Title sm>{elem.name || elem.tag}</Title>
      <div draggable={true} onDragStart={drag} onDragEnd={dragEnd}>
        {getContent(elem)}
      </div>
    </div>
  );
});

export default memo(ElementMaker);
