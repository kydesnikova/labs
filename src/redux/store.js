import { createStore, combineReducers } from "redux";

import { users } from "./reducers/users";
import { allowed } from "./reducers/rest";
import { accounts } from "./reducers/accounts";

let initialState = {
  users: [],
  accounts: [
    {
      login: "admin",
      password: "admin",
      email: "admin@gmail.com",
    },
  ],

  allowed: false,
};

const store = createStore(
  combineReducers({ users, allowed, accounts }),
  initialState
);
store.subscribe(() => store.getState());


export default store;
