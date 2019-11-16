import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';
import './Navigation.css'

const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  width: 100%;
  padding: 20px 20px 20px 0;
  margin-bottom:30px;
`;

const Navigation = ({ authenticated }) => {
  return (
    <StyledList>
      <li>
        <NavLink className="navLink" activeClassName="selected"  exact to="/">Home </NavLink>
      </li>
     
      
      {authenticated && (<>
        <li>
          <NavLink className="navLink" activeClassName="selected" to="/account">Account </NavLink>
        </li>
        <li>
        <NavLink className="navLink" activeClassName="selected" to="/dashboard">Dashboard </NavLink>
      </li> 
      <li>
        <NavLink className="navLink" activeClassName="selected" to="/graph">Graph </NavLink>
      </li></>
      )}

      {!authenticated && (
        <>
          <li>
            <NavLink className="navLink" activeClassName="selected" to="/login">Login </NavLink>
          </li>
          <li>
            <NavLink className="navLink" activeClassName="selected" to="/signup">Signup </NavLink>
          </li>
        </>
      )}
    </StyledList>
  );
};

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
