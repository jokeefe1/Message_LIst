import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./reducers/userReducer";
import { messageReducer } from "./reducers/messageReducer";
import { mathReducer } from "./reducers/mathReducer";

export const store = createStore(
  combineReducers(
    { user: userReducer, message: messageReducer, math: mathReducer },
    {},
    applyMiddleware(thunk)
  )
);
