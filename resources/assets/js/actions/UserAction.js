import {UserConstants, CommonConstants} from '../constants';
import request from 'axios';

export const UserAction = {
  registerUser(fbResponse, successCallback, failedCallback) {
    request({
      method: 'POST',
      url: CommonConstants.API_REGISTER_USER_PATH,
      data: {name: fbResponse.name, email: fbResponse.userId, password: fbResponse.accessToken,}
    }).then(response => response.data)
      .then(json => {
        if (typeof(successCallback) === 'function') {successCallback(json)}
      })
      .catch((error) => {
        if (typeof(failedCallback) === 'function') {failedCallback(error.response.data)}
      });
  },

  loginUser(userInfo, successCallback, failedCallback) {
    request({
      method: 'POST',
      url: CommonConstants.API_LOGIN_PATH,
      data: {client_id: 2, client_secret: 'Nvyh8oSYCMLbWCZy6otRirN6Ppry1KGQ5fam14UU',
        grant_type: 'password', username: userInfo.userId, password: userInfo.accessToken}
    }).then(response => response.data)
      .then(json => {
        if (typeof(successCallback) === 'function') {successCallback(json)}
      })
      .catch((error) => {
        if (typeof(failedCallback) === 'function') {failedCallback(error.response)}
      });
  },

  setCurrentUser(store, currentUser) {
    store.dispatch({type: UserConstants.SET_CURRENT_USER, currentUser: currentUser});
  },

  getUser(callback) {
    request({
      method: 'GET',
      url: CommonConstants.API_USER_PATH,
      headers: {Accept: 'application/json', Authorization: 'Bearer ' + window.localStorage.getItem('accessToken')},
    }).then(response => response.data)
      .then(user => callback(user));
  }
}
