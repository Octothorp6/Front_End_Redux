import { combineReducers } from "redux";
import layout from "./layout";
import auth from "./auth";
import checkout from "./checkout";
import email from "./email";

export default combineReducers({
  auth,
  checkout,
  email,
  layout
});
