import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to={'/movie'}>포트폴리오 관리</Link>
      <Link to={'/cart'}>카트</Link>
      <Link to={'doublenav/weather/Seoul'}>날씨</Link>
    </div>
  );
};

export default Navbar;
