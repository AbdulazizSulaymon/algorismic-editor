import { observer } from "mobx-react";
import { useContext, useEffect } from "react";
import StoreContext from "./storeContext";

type Todo = {
  task: string;
  completed: boolean;
};

const TodoList = observer(({ name }: { name: string }) => {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.todos = [
      {
        task: "task",
        completed: false,
      },
    ];
  }, []);

  const onNewTodo = () => {
    const task = prompt("Enter a new todo:", "coffee plz");
    task &&
      store.todos.push({
        task: task,
        completed: false,
      });
  };

  return (
    <div>
      <ul>
        {store.todos.map((todo: Todo, idx: number) => (
          <TodoView todo={todo} key={idx} />
        ))}
      </ul>
      {store.pendingRequests > 0 ? <span>Loading...</span> : null}
      <button onClick={onNewTodo}>New Todo</button>
      <small> (double-click a todo to edit)</small>
    </div>
  );
});

const TodoView = observer(({ todo }: { todo: Todo }) => {
  const onToggleCompleted = () => {
    todo.completed = !todo.completed;
  };

  const onRename = () => {
    todo.task = prompt("Task name", todo.task) || todo.task;
  };

  return (
    <li onDoubleClick={onRename}>
      <input type="checkbox" checked={todo.completed} onChange={onToggleCompleted} />
      {todo.task}
    </li>
  );
});

export default TodoList;
