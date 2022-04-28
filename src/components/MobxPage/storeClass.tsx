import { action, autorun, computed, makeObservable, observable } from "mobx";

type Todo = {
  task: string;
  completed: boolean;
  assignee?: string | null;
};

class ObservableTodoStore {
  @observable todos: Todo[] = [{ task: "string", completed: true }];
  @observable pendingRequests = 0;

  constructor() {
    makeObservable(
      this
      //   {
      //   todos: observable,
      //   pendingRequests: observable,
      //   completedTodosCount: computed,
      //   report: computed,
      //   addTodo: action,
      // }
    );
    autorun(() => console.log(this.report));
  }

  @computed
  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length;
  }

  get report() {
    if (this.todos.length === 0) return "<none>";
    const nextTodo = this.todos.find((todo) => todo.completed === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  @action
  addTodo(task: string) {
    this.todos.push({
      task: task,
      completed: false,
    });
  }
}

export default ObservableTodoStore;
