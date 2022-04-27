import { scheme } from "components/Editor/types";
import { action, autorun, computed, makeObservable, observable } from "mobx";

class Store {
  @observable scheme: scheme = { page: { children: [] } };

  constructor() {
    makeObservable(this);
    autorun(() => console.log(this.report));
  }

  //   @computed
  //   get completedTodosCount() {
  //     return this.todos.filter((todo) => todo.completed === true).length;
  //   }

  get report() {
    return this.scheme;
  }
}

export default Store;
