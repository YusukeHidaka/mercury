import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {AppLayout, Home, About, NoMatch, Login}from './components';

render((
        <Router history={browserHistory}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={Home}/>
                <Route path="about" component={About}/>
                <Route path="login" component={Login}/>
                <Route path='*' component={NoMatch} />
            </Route>
        </Router>
), document.getElementById('app')
);
