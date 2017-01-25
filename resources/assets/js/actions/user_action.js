import {UserConstants, CommonConstants} from '../constants';
import request from 'axios';

export const UserAction = {
  registerUser(fbResponse, successCallback, failedCallback) {
    request({
      method: 'POST',
      url: CommonConstants.API_REGISTER_USER_PATH,
      data: {name: fbResponse.name, email: fbResponse.email, password: fbResponse.accessToken,}
    }).then(response => response.data)
      .then(json => {
        if (typeof(successCallback) === 'function') {successCallback(json)}
      })
      .catch((error) => {
        if (typeof(failedCallback) === 'function') {failedCallback(error.response.data)}
      });
  },

  setCurrentUser(store, currentUser) {
    store.dispatch({type: UserConstants.SET_CURRENT_USER, currentUser: currentUser});
  },

  getUser(callback, includes) {
    request({
      method: 'GET',
      url: CommonConstants.API_USER_PATH,
      params: {includes: includes}
    }).then(response => response.data)
      .then(user => callback(user));
  }
}
