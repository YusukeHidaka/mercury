import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {App, TimeLine, Profile, Chat, Plan, SignUp, SignIn, News, Contact,
  PrivacyPolicy, TermsOfUse, QandA, NoMatch} from './containers';

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={TimeLine}/>
      <Route path='profile/:uid' component={Profile}/>
      <Route path='chat/:uid' component={Chat}/>
      <Route path='plans/:planId' component={Plan}/>
      <Route path='sign_up' component={SignUp}/>
      <Route path='sign_in' component={SignIn}/>
      <Route path='news' component={News}/>
      <Route path='contact' component={Contact}/>
      <Route path='privacy_policy' component={PrivacyPolicy}/>
      <Route path='terms_of_use' component={TermsOfUse}/>
      <Route path='q_and_a' component={QandA}/>
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
), document.getElementById('app')
);
