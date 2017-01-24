import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import rootReducer from './reducers/root_reducer';
import {App, TimeLine, Profile, Chat, Plan, SignUp, News, Contact,
  PrivacyPolicy, TermsOfUse, QandA, NoMatch, FacebookApi} from './containers';
import {UserAction} from './actions';

const store = createStore(rootReducer);

render((<Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TimeLine}/>
      <Route path='profile/:uid' component={Profile}/>
      <Route path='chat/:uid' component={Chat}/>
      <Route path='plans/:planId' component={Plan}/>
      <Route path='sign_up' component={SignUp}/>
      <Route path='news' component={News}/>
      <Route path='contact' component={Contact}/>
      <Route path='privacy_policy' component={PrivacyPolicy}/>
      <Route path='terms_of_use' component={TermsOfUse}/>
      <Route path='q_and_a' component={QandA}/>
      <Route path='facebook_api' component={FacebookApi}/>
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app')
);
