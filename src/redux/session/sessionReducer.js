import { actionType } from './sessionActions';
import { combineReducers } from 'redux';




const user = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_USER_SUCCESS:
    case actionType.SIGNUP_USER_SUCCESS:
      return payload.response;
    case actionType.REFRESH_USER_SUCCESS:
      return payload.response;
    case actionType.LOGOUT:
      return null;
    default:
      return state;
  }
};

const authenticated = (state = false, { type }) => {
  switch (type) {
    case actionType.SIGNUP_USER_SUCCESS:
    case actionType.LOGIN_USER_SUCCESS:
    case actionType.REFRESH_USER_SUCCESS:
      return true;
    case actionType.LOGOUT:
      return false;
    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case actionType.ADD_TOKEN:
      return payload
    case actionType.LOGOUT:
      return null;
    default:
      return state;
  }
};

const list = (state = [], { type, payload }) => {
  switch (type) {
    case actionType.FETCH_LIST_SUCCESS:
    return [...payload.response]
    default:
      return state;
  }
};

export default combineReducers({
  user,
  authenticated,
  list,
  token
});
