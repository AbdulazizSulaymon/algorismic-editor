import { createContext } from "react";
import ObservableTodoStore from "./storeClass";

const StoreContext = createContext<ObservableTodoStore>(new ObservableTodoStore());

export default StoreContext;
