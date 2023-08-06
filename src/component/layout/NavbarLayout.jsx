import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const NavbarLayout = () => {
  // 자신이 감싼 하위컴포넌트 위치 정의
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default NavbarLayout;
