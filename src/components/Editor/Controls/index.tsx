import { observer } from "mobx-react";
import { ChangeEvent, useCallback, useContext, useEffect, useState } from "react";
import StoreContext from "store/StoreContext";
import CollapseGroup from "../../CollapseGroup";
import Input from "../../Input";
import * as _ from "lodash";
import TextArea from "components/Textarea";

const Controls = observer(() => {
  const store = useContext(StoreContext);

  const target = store.selectedElement;

  if (!target.tag) return <p>Select Element</p>;

  let { tag, attributes, children } = target;

  if (!target.attributes.style) target.attributes.style = {};
  let { style } = target.attributes;

  const getValue = (e: ChangeEvent<Element>) => {
    const input = e.target as HTMLInputElement;
    return input.value;
  };

  return (
    <>
      {tag == "a" && (
        <Input
          value={_.get(attributes, "href", "")}
          label="href"
          name="href"
          onChange={(e) => {
            target.attributes.href = getValue(e);
          }}
          placeholder="href"
        />
      )}
      {typeof children == "string" && (
        <TextArea
          value={children}
          label="Content"
          name="Content"
          onChange={(e) => {
            target.children = getValue(e);
          }}
          placeholder="Be careful"
        />
      )}
      {["img", "audio", "video"].includes(tag) && (
        <>
          <Input
            value={_.get(attributes, "src", "")}
            label="source"
            name="source"
            onChange={(e) => {
              target.attributes.src = getValue(e);
            }}
            placeholder="src"
          />
          <Input
            value={_.get(attributes, "alt", "")}
            label="alt"
            name="alt"
            onChange={(e) => {
              target.attributes.alt = getValue(e);
            }}
            placeholder="alt"
          />
        </>
      )}
      <CollapseGroup title={"Dimensions"}>
        <CollapseGroup title={"Width and Height"}>
          <div className="d-flex">
            <Input
              value={_.get(style, "width", "auto")}
              label="Width"
              name="width"
              onChange={(e) => {
                const val = getValue(e);
                style.width = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
            <Input
              label="Height"
              name="height"
              value={_.get(style, "height", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.height = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
          </div>
        </CollapseGroup>
        <CollapseGroup title={"Padding"}>
          <div className="d-flex">
            <Input
              label="Top"
              name="pt"
              value={_.get(style, "paddingTop", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.paddingTop = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
            <Input
              label="Right"
              name="pr"
              value={_.get(style, "paddingRight", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.paddingRight = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
          </div>
          <div className="d-flex">
            <Input
              label="Bottom"
              name="pb"
              value={_.get(style, "paddingBottom", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.paddingBottom = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
            <Input
              label="Left"
              name="pl"
              value={_.get(style, "paddingLeft", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.paddingLeft = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
          </div>
        </CollapseGroup>
        <CollapseGroup title={"Margin"}>
          <div className="d-flex">
            <Input
              label="Top"
              name="mt"
              type="number"
              value={_.get(style, "marginTop", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.marginTop = val.length ? +val : "auto";
              }}
              placeholder="auto"
            />
            <Input
              label="Right"
              name="mr"
              type="number"
              value={_.get(style, "marginRight", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.marginRight = val.length ? +val : "auto";
              }}
              placeholder="auto"
            />
          </div>
          <div className="d-flex">
            <Input
              label="Bottom"
              name="mb"
              value={_.get(style, "marginBottom", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.marginBottom = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
            <Input
              label="Left"
              name="ml"
              value={_.get(style, "marginLeft", "auto")}
              onChange={(e) => {
                const val = getValue(e);
                style.marginLeft = val.length ? +val : "auto";
              }}
              type="number"
              placeholder="auto"
            />
          </div>
        </CollapseGroup>
      </CollapseGroup>
      <CollapseGroup title={"Typography"}>
        <div className="d-flex">
          <Input
            value={_.get(style, "color", "")}
            label="Color"
            name="color"
            type="color"
            onChange={(e) => (style.color = getValue(e))}
          />
        </div>
      </CollapseGroup>
      <CollapseGroup title={"Appearance"}>
        <div className="d-flex">
          <Input
            value={_.get(style, "backgroundColor", "transparent")}
            label="Background"
            name="backgroundColor"
            type="color"
            onChange={(e) => (style.backgroundColor = getValue(e))}
          />
        </div>
      </CollapseGroup>
    </>
  );
});

export default Controls;
