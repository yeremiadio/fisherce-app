import { LOGOUT, SET_IS_FETCHING, SET_USER } from "../constants";

const initialState = {
  user: {},
  isFetching: false,
  isAuthenticated: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        isFetching: false,
        isAuthenticated: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}
