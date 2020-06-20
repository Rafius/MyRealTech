import React from 'react';
import {AuthWrapper} from './auth.styled';

const Auth = ({children}) => {
  return <AuthWrapper>{children}</AuthWrapper>;
};

export default Auth;
