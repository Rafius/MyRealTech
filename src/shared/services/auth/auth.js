import {exists, get, set, remove} from '../storage';

const TOKEN_NAME = 'token';
const USER_ID = 'userId';

export const isAuthenticated = () => {
  const token = exists(TOKEN_NAME);
  return !!token;
};

export const getToken = () => {
  return get(TOKEN_NAME);
};

export const setToken = token => {
  return set(TOKEN_NAME, token);
};

export const removeToken = () => {
  return remove(TOKEN_NAME);
};

export const getUserId = () => {
  return get(USER_ID);
};

export const setUserId = userId => {
  return set(USER_ID, userId);
};

export const removeUserId = () => {
  return remove(USER_ID);
};
