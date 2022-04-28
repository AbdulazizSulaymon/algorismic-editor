import { element, scheme } from "components/Editor/types";
import { autorun, configure, makeAutoObservable } from "mobx";

configure({
  enforceActions: "never",
});

class Store {
  scheme: scheme = { page: { children: [] } };
  selectedElement: element = { tag: "", attributes: {}, children: [] };
  draggingElement: element = { tag: "", attributes: {}, children: [] };
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
