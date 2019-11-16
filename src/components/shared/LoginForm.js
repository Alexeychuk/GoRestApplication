import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { loginUser } from '../../redux/session/sessionOperations';

import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
 
    e.preventDefault();
    const {handleLogin} = this.props;
    const {email, password} = this.state;
    handleLogin({
       email,
       password
      }).then(res =>{
          if(!res){
          } else {
            this.props.history.replace('/account');
             this.setState({ email: '',
             password: '',
             })
          }
             
        }
      )
      
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
        </Label>
        <Button label="Login" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLogin: body => dispatch(loginUser(body)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(LoginForm),
);
