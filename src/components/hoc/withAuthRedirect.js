import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

const withAuthRedirect = BaseComponent => {
  class WithAuthRedirect extends Component {
    
    componentDidMount() { 
      if (this.props.authenticated) {
        this.props.history.replace('/');
       
      }
    }
    

    render() {
      
      return <BaseComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: getIsAuthenticated(state),
  });

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
