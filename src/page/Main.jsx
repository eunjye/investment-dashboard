import React from 'react';
import useLogin from '../hook/useLogin';
import { Navigate } from 'react-router';
import { PATH_PRIVATE_ROOT } from '../constant/path';

const Main = () => {
  const { isLoggedIn } = useLogin();
  if (isLoggedIn) {
    return <Navigate to={PATH_PRIVATE_ROOT} replace /> // 첫번째 private 페이지로 리다이렉트
  }
  return <Navigate to="/login" replace />
};

export default Main;