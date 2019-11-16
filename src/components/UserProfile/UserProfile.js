import React from 'react';
import Button from '../shared/Button';
import {connect} from 'react-redux'
import { getUser} from '../../redux/session/sessionSelectors';
import {Container} from './StyledUserProfile';
import { withRouter } from 'react-router';

const UserProfile = ({ onLogout, user = {first_name: '', last_name:'', email: ''}, history }) => {

  const handleLogOut = () => {
    onLogout();
    history.replace('/')
  }

  return (
    <Container>
      {user && <> <p>{user.first_name} {user.last_name}</p>
     <p>{user.email}</p></>}
    
      <Button label="LogOut" onClick={handleLogOut} />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  user: getUser(state)

})



export default withRouter(connect(mapStateToProps)(UserProfile));
