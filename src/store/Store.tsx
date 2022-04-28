import { element, scheme } from "components/Editor/types";
import { action, autorun, computed, configure, makeObservable, observable } from "mobx";

configure({
  enforceActions: "never",
});

class Store {
  @observable scheme: scheme = { page: { children: [] } };
  @observable selectedElement: element = { tag: "", attributes: {}, children: [] };

  constructor() {
    makeObservable(this);
    autorun(() => console.log("Report", this.report));
  }

  //   @computed
  //   get completedTodosCount() {
  //     return this.todos.filter((todo) => todo.completed === true).length;
  //   }

  get report() {
    return this.selectedElement;
  }
}

export default Store;
