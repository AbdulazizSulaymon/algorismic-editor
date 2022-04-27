import TodoList from "./todolist";
import ObservableTodoStore from "./storeClass";
import StoreContext from "./storeContext";

export default function MobxPage() {
  return (
    <StoreContext.Provider value={new ObservableTodoStore()}>
      <TodoList name="TODO LIST MOBX" />
    </StoreContext.Provider>
  );
}
