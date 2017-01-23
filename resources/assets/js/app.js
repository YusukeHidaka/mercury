import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {HomeTabs} from './containers';
import {Home, About, NoMatch, Login}from './components';

render((
        <Router history={browserHistory}>
            <Route path="/" component={HomeTabs}>
                <IndexRoute component={Home}/>
                <Route path="about" component={About}/>
                <Route path="login" component={Login}/>
                <Route path='*' component={NoMatch} />
            </Route>
        </Router>
), document.getElementById('app')
);
