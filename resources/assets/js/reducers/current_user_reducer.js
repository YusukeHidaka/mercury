import {UserConstants} from '../constants';

export const CurrentUserReducer = {
  currentUser(state = '', action) {
    switch (action.type) {
      case UserConstants.SET_CURRENT_USER:
        return action.currentUser;
      default:
        return state;
    }
  }
}
