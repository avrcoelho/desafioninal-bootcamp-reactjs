import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';

// pages
import Login from '../pages/Login';

const isAuthenticated = true;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated ? (
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
      <PrivateRoute path="/orders" component={() => <h1>Pedidos</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
