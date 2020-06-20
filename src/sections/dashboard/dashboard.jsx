import React from 'react';
import {userLogout} from '../../shared/db/utils';
import {DashBoardWrapper, ButtonStyle} from './dashboard.styled';
import {useHistory} from 'react-router-dom';

const Dashboard = ({children}) => {
  const history = useHistory();
  const logOut = () => {
    userLogout();
    history.push('/');
  };

  return (
    <DashBoardWrapper>
      {children}
      <ButtonStyle onClick={logOut}>Logout</ButtonStyle>
    </DashBoardWrapper>
  );
};

export default Dashboard;
