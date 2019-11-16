import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/shared/LoginForm';
import { connect } from 'react-redux';
import * as sessionOperations from '../redux/session/sessionOperations';
import withAuthRedirect from '../components/hoc/withAuthRedirect';



class LoginPage extends Component {
  
  render() {
    return (
      <main style={{padding: `0 0`}}>
        <LoginForm />
      </main>
    );
  }
}

export default withAuthRedirect(LoginPage);

//export default LoginPage;