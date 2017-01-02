import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Signup/Signup';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="signup" component={Signup} />
  </Route>
);
