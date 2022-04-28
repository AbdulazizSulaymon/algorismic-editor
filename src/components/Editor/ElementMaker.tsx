import Title from "components/Title";
import { element } from "./types";
import { observer } from "mobx-react";
import { DragEvent, memo, useContext, useEffect } from "react";
import StoreContext from "store/StoreContext";
import { iteratorChildren } from "./iteratorChildren";
import { toJS } from "mobx";

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
    const { tag: Tag, attributes, children } = elem;

    const attrs = toJS(attributes);
    // attrs.draggable = true;
    // attrs.onDragStart = drag;

    return (
      <Tag {...attrs} key={attrs.id}>
        {typeof children != "string" ? getContent(children) : children}
      </Tag>
    );
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
