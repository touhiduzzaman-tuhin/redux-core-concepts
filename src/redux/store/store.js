import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootRenderer from "../rootReducer/rootReducer";

export const store = createStore(rootRenderer, composeWithDevTools(applyMiddleware(logger, thunk)))