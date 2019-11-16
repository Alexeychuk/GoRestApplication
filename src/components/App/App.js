import React, { Component, Suspense, lazy  } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { spring, AnimatedSwitch } from 'react-router-transition';
import './App.css';

//Pages
// import HomePage  from '../../pages/Home';
// import LoginPage  from '../../pages/Login';
// import SignupPage  from '../../pages/Signup';
// import DashboardPage  from '../../pages/Dashboard';
// import AboutPage  from '../../pages/About';
// import AccountPage  from '../../pages/Account';

//redux
import { connect } from 'react-redux';
import {
  getUserName,
  getIsAuthenticated,
} from '../../redux/session/sessionSelectors';
import { refreshUser, getList } from '../../redux/session/sessionOperations';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {

  atEnter: {
    opacity: 0,
    scale: 1.2,
  },

  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },

  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const HomePage = lazy(() => import('../../pages/Home'));
const LoginPage = lazy(() => import('../../pages/Login'));
const SignupPage = lazy(() => import('../../pages/Signup'));
const DashboardPage = lazy(() => import('../../pages/Dashboard'));
const AboutPage = lazy(() => import('../../pages/About'));
const AccountPage = lazy(() => import('../../pages/Account'));

class App extends Component {
  componentDidMount() {
    this.props.refreshUser();
    this.props.getList()
  }

  render() {
    const { authenticated } = this.props;
    return (
      <div style={{ padding: '0 60px' }}>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          <Route exact path="/" component={HomePage} />
          <Route path="/graph" component={AboutPage} />
        
          <ProtectedRoute
            redirectTo = '/login'
            authenticated={authenticated}
            path="/dashboard"
            component={DashboardPage}
        
          />
          <ProtectedRoute
            redirectTo = '/'
            authenticated={authenticated}
            path="/account"
            component={AccountPage}
        
          />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Redirect to="/"/>
        </AnimatedSwitch>
        </Suspense>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  refreshUser,
  getList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
