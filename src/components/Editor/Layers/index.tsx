/** @jsxImportSource @emotion/react */
import React, { useContext, useEffect } from "react";
import { element } from "../types";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import StoreContext from "store/StoreContext";
import Store from "store/Store";
import classNames from "classnames";
import { isBlockElement, isEmptyTag } from "../ComponentsPanel/ElementMaker";
import LayersWrapper from "./LayersWrapper";
import CollapseGroup from "components/CollapseGroup";
import theme from "style/theme";

let countClicks = 0;

const prepareAttributes = (attrs: any = {}, elem: element, store: Store) => {
  attrs.key = attrs.id;
  attrs.style = {};
  attrs.className = classNames({
    active: store.selectedElement.attributes.id === attrs.id,
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

const Layers = observer(() => {
  const store = useContext(StoreContext);
  const { scheme } = store;
  const paddingValue = 10;

  const getElement = (elem: element, pl: number) => {
    if (elem == undefined) return <></>;

    const { tag: Tag, attributes } = elem;
    const children = elem.children || "";

    const attrs = prepareAttributes(toJS(attributes), elem, store);

    const nonEmpty = !isEmptyTag(Tag) && typeof children != "string";

    const css = {
      ".title": {
        paddingLeft: pl,
        background: theme.colors.secondary,
        borderTop: `1px solid ${theme.colors.primary}`,
        borderLeft: `1px solid ${theme.colors.primary}`,
        borderRight: `1px solid ${theme.colors.primary}`,
      },
    };
    const title = `${Tag} - ${attrs.id}`;

    return nonEmpty ? (
      <div {...attrs}>
        <CollapseGroup css={css} title={title} className={attrs.className}>
          {getContent(children, pl)}
        </CollapseGroup>
      </div>
    ) : (
      <div css={css} {...attrs}>
        <div className="title">{title}</div>
      </div>
    );
  };

  const getElements = (item: element, pl: number) =>
    typeof item === "string"
      ? getElement({ tag: "span", children: item, attributes: { id: store.lastId } }, pl)
      : getElement(item, pl);

  const getContent = (items: any, pl: number = paddingValue): React.ReactNode =>
    Array.isArray(items)
      ? items.map((item) => getElements(item, pl + paddingValue))
      : getElements(items, pl);

  return <LayersWrapper>{getContent(scheme.page.children)}</LayersWrapper>;
});

export default Layers;
