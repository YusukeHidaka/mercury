import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';
import {CurrentUserReducer} from './current_user_reducer';

const rootReducer = combineReducers({
  currentUser: CurrentUserReducer.currentUser,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
