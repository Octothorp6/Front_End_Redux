import { combineReducers } from "redux";
import layout from "./layout";
import login from "./login";
import checkout from "./checkout";
import email from "./email";

export default combineReducers({
  layout,
  login,
  checkout,
  email
});