export const actionType = {
  LOGIN_USER_REQUEST: 'LOGIN_USER_REQUEST',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
  SIGNUP_USER_REQUEST: 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR: 'SIGNUP_USER_ERROR',
  REFRESH_USER_REQUEST: 'REFRESH_USER_REQUEST',
  REFRESH_USER_SUCCESS: 'REFRESH_USER_SUCCESS',
  REFRESH_USER_ERROR: 'REFRESH_USER_ERROR',
  FETCH_LIST_REQUEST: 'FETCH_LIST_REQUEST',
  FETCH_LIST_SUCCESS: 'FETCH_LIST_SUCCESS',
  FETCH_LIST_ERROR: 'FETCH_LIST_ERROR',
  LOGOUT: 'LOGOUT',
  ADD_TOKEN: 'ADD_TOKEN',
};

export const addToken = token => ({
  type: actionType.ADD_TOKEN,
  payload: token
});

export const loginUserRequest = () => ({
  type: actionType.LOGIN_USER_REQUEST,
});

export const loginUserSuccess = response => ({
  type: actionType.LOGIN_USER_SUCCESS,
  payload: { response },
});

export const loginUserError = error => ({
  type: actionType.LOGIN_USER_ERROR,
  payload: { error },
});

export const signupUserRequest = () => ({
  type: actionType.SIGNUP_USER_REQUEST,
});

export const signupUserSuccess = response => ({
  type: actionType.SIGNUP_USER_SUCCESS,
  payload: { response },
});

export const signupUserError = error => ({
  type: actionType.SIGNUP_USER_ERROR,
  payload: { error },
});

export const refreshUserRequest = () => ({
  type: actionType.REFRESH_USER_REQUEST,
});

export const refreshUserSuccess = response => ({
  type: actionType.REFRESH_USER_SUCCESS,
  payload: { response },
});

export const refreshUserError = error => ({
  type: actionType.REFRESH_USER_ERROR,
  payload: { error },
});

export const fetchListRequest = () => ({
  type: actionType.FETCH_LIST_REQUEST,
});

export const fetchListSuccess = response => ({
  type: actionType.FETCH_LIST_SUCCESS,
  payload: { response },
});

export const fetchListError = error => ({
  type: actionType.FETCH_LIST_ERROR,
  payload: { error },
});

export const logout = () => ({
  type: actionType.LOGOUT,
});

