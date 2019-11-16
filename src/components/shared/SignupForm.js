import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signupUser } from '../../redux/session/sessionOperations';
import { withRouter } from 'react-router';

import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    first: '',
    last: '',
  };

  handleSubmit = e => {
    const { handleSubmit } = this.props;
    const { email, password,first,last} = this.state;
 
    e.preventDefault();
    handleSubmit({
       email,
       password,
       first,
       last
      }).then(res =>{
        if(res === 200){
             this.props.history.replace('/account');
             this.setState({ email: '',
             password: '',
             first: '',
             last: '', });
        }
      })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password,first,last } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          First Name
          <Input
            type="text"
            value={first}
            name="first"
            onChange={this.handleChange}
          />
        </Label>
        <Label>
          Last Name
          <Input
            type="text"
            value={last}
            name="last"
            onChange={this.handleChange}
          />
        </Label>
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
        
        <Button label="Signup" type="submit" />
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: body => dispatch(signupUser(body)),
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps,
  )(SignupForm),
);
