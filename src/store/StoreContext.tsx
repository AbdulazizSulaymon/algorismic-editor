import { createContext } from "react";
import Store from "./Store";

const StoreContext = createContext<Store>(new Store());

export default StoreContext;
