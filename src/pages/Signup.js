import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as sessionOperations from '../redux/session/sessionOperations';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

import Signupform from '../components/shared/SignupForm';

class Signup extends Component {
  render() {
    return (
      <main>
        <Signupform />
      </main>
    );
  }
}

export default withAuthRedirect(Signup);

//export default Signup