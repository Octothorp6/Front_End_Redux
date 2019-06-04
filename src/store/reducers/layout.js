import { TOGGLE_SIDEBAR } from "../actions/types";
import { sideBarState } from "../initialState" 

export default function LayoutReducer(state = sideBarState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isSidebarOpened: !state.isSidebarOpened
      };
    default:
      return state;
  }
}
