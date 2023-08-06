import React from 'react';
import Button from '../component/atom/Button';
import useAuth from '../hook/useAuth';

const Mypage = () => {
  const { handleLogout } = useAuth();

  return (
    <div>
      마이페이지
      <Button onClick={handleLogout}>로그아웃</Button>
    </div>
  );
};

export default Mypage;