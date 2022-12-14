import { rest as C } from "../constants";

export const allowed = (state = false, action) =>
  action.type === C.INVERSE_STATUS ? !state : state;
