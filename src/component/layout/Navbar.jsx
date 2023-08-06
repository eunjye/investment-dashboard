import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../atom/Button';
import useAuth from '../../hook/useAuth';

const Navbar = () => {
  const { handleLogout } = useAuth();

  return (
    <div>
      <Link to={'/private/mypage'}>포트폴리오 관리</Link>
      <Button onClick={handleLogout}>로그아웃</Button>
    </div>
  );
};

export default Navbar;
