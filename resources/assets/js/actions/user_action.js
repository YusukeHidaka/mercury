import {UserConstants, CommonConstants} from '../constants';
import request from 'axios';

export const UserAction = {
  registerUser(response) {
    request({
      method: 'POST',
      url: CommonConstants.API_REGISTER_USER_PATH,
      data: {name: response.name, email: response.email, password: response.id,}
    }).then(response => response.data)
      .then(user => callback(user));
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
