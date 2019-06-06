import { combineReducers } from "redux";
import layout from "./layout";
import login from "./login";
import checkout from "./checkout";
import contact from "./contact";

export default combineReducers({
  layout,
  login,
  checkout,
  contact
});