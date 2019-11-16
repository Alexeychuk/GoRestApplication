import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  getIsAuthenticated

} from '../../redux/session/sessionSelectors';
import { logOut } from '../../redux/session/sessionOperations';

import Navigation from '../Navigation/Navigation';
import UserProfile from '../UserProfile/UserProfile';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AppBar = ({ authenticated, onLogout, user }) => {
  return (
    <StyledHeader>
      <Navigation />
      {authenticated && <UserProfile onLogout={onLogout}/>}
    </StyledHeader>
  );
};

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state)

});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppBar);
