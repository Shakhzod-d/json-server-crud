import { applyMiddleware, createStore } from "redux";
import sneakersReducer from "./sneakersReducer";
import thunk from "redux-thunk";

export const store = createStore(sneakersReducer, applyMiddleware(thunk));
