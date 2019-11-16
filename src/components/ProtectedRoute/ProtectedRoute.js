import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

const ProtectedRoute = ({
  redirectTo = '/',
  authenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: redirectTo
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
