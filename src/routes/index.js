import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

// pages
import Login from '../pages/Login';
import Orders from '../pages/Orders';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathName: '/', state: { from: props.location } }} />
    ))
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/orders" component={Orders} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
