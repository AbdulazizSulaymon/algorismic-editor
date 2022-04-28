import { element, scheme } from "components/Editor/types";
import { autorun, configure, makeAutoObservable } from "mobx";
import { RefObject } from "react";

configure({
  enforceActions: "never",
});

export const getEmptyElement = () => ({ tag: "", attributes: {}, children: [] });

class Store {
  scheme: scheme = { page: { children: [] } };
  selectedElement: element = getEmptyElement();
  selectedElementFather: element = getEmptyElement();
  draggingElement: element = getEmptyElement();
  isDragging: boolean = false;
  lastId: number = 1;

  constructor() {
    makeAutoObservable(this);
    // autorun(() => console.log("Report", this.report));
  }

  get report() {
    return this.selectedElement;
  }
}

export default Store;
