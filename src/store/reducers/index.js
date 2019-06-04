import { combineReducers } from "redux";
import layout from "./layout";
import login from "./login";
import checkout from "./checkout";
import error from "./errors";
import contact from "./contact";

export default combineReducers({
  layout,
  login,
  checkout,
  error,
  contact
});