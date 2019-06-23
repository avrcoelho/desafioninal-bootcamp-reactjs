import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { isAuthenticated } from '../services/auth';

// pages
import Login from '../pages/Login';
import Orders from '../pages/Orders';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Redirect to="/orders" /> : <Component {...props} />)}
  />
);

PublicRoute.propTypes = {
  component: PropTypes.shape().isRequired,
};

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

PrivateRoute.propTypes = {
  component: PropTypes.shape().isRequired,
  location: PropTypes.shape(),
};

PrivateRoute.defaultProps = {
  location: null,
};

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PublicRoute exact path="/" component={Login} />
      <PrivateRoute path="/orders" component={Orders} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
