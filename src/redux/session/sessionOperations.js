//var hash = require('object-hash');
import axios from 'axios';
import { actionType } from './sessionActions';
import { getToken } from './sessionSelectors';
import hash from 'object-hash'

import {
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signupUserRequest,
  signupUserSuccess,
  signupUserError,
  refreshUserRequest,
  refreshUserSuccess,
  refreshUserError,
  fetchListRequest,
  fetchListSuccess,
  fetchListError,
  logout,
  addToken
} from './sessionActions';

axios.defaults.baseURL = 'https://gorest.co.in/public-api';
axios.defaults.headers.common['Authorization'] = `Bearer d0gljb1gsDiihQkN9vhgboheAaEB2mVY6siI`;


const setAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearAuthToken = () => {
  axios.defaults.headers.common['Authorization'] = null;
};

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const signupUser = body => dispatch => {
  dispatch(signupUserRequest());
  dispatch(addToken(hash(body.password)));


const data = {
  "email": body.email,
  "first_name": body.first,
  "last_name": body.last,
  "gender": "male"
}
 
  return axios.post('/users',data )
    .then(res => {
      if(res.data._meta.code === 200){
      dispatch(signupUserSuccess(res.data.result))
      if(window.localStorage.getItem('pairs')){
        const oldStore = JSON.parse(
        window.localStorage.getItem('pairs'))
        const newItem = {token:hash(body.password), email:res.data.result.email, id:res.data.result.id }
        const newStore = [...oldStore, newItem]
        window.localStorage.setItem('pairs',JSON.stringify(newStore))
        window.localStorage.setItem('currentToken',JSON.stringify(hash(body.password)))
      } else{
        window.localStorage.setItem('pairs', JSON.stringify([{token:hash(body.password), email:res.data.result.email, id:res.data.result.id }]))
      }
    }
      if(res.data._meta.code === 422){
        dispatch(signupUserError('invalid data'))
      }
      return res.data._meta.code;

    })
    .catch(err => dispatch(signupUserError(err)));
};

export const loginUser = body => dispatch => {
  dispatch(loginUserRequest());
  if( !window.localStorage.getItem('pairs')) return Promise.resolve(false);

    const store = JSON.parse(
    window.localStorage.getItem('pairs'))
    const logger = store.find(el => el.email === body.email && el.token === hash(body.password));
    if(!logger) return Promise.resolve(false)
 
    return axios
      .get(`/users/${logger.id}`)
      .then(response => {
        dispatch(loginUserSuccess(response.data.result));
        window.localStorage.setItem('currentToken',JSON.stringify(hash(body.password)))
        return true
      })
      .catch(err => dispatch(loginUserError(err)));
};

export const refreshUser = () => dispatch => {
  const currentToken =  JSON.parse(window.localStorage.getItem('currentToken'));
  if (!currentToken) return;
  const store = JSON.parse(window.localStorage.getItem('pairs'))
    const logger = store.find(el => el.token === currentToken)
    if(!logger) return;
  dispatch(refreshUserRequest());
  return axios
  .get(`/users/${logger.id}`)
  .then(response => {
    dispatch(refreshUserSuccess(response.data.result));
    return true
  })
  .catch(err => dispatch(refreshUserError(err)));
};

export const getList = () => (dispatch, getState) => {

  dispatch(fetchListRequest());
  const options = {
    url:'/posts',
     method: 'GET',
    headers:{
     'content-type': 'application/JSON'
    }
  }

  axios(options).then(response => {
    
     dispatch(fetchListSuccess(response.data.result));
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchListError(err));
    });
    
};


export const logOut = () => dispatch => {
  window.localStorage.removeItem('currentToken',)
  dispatch(logout());
};
