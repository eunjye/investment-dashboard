import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../component/atom/Input';
import Button from '../component/atom/Button';
import useLogin from '../hook/useLogin';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const { isLoggedIn, handleLogin } = useLogin();

  const handleInputId = (event) => {
    setUserId(event.target.value);
  }
  const handleInputPw = (event) => {
    setUserPw(event.target.value);
  }

  const handleBtnLogin = () => {
    handleLogin(userId, userPw);
  }

  if (isLoggedIn) {
    return <Navigate to="/private" replace /> // 첫번째 private 페이지로 리다이렉트
  }

  return (
    <>
      <h2>ID 입력</h2>
      <Input size='md' placeholder={'아이디를 입력해주세요.'} value={userId} onChange={handleInputId} />
      <h2>Password 입력</h2>
      <Input type="password" size='md' placeholder={'비밀번호를 입력해주세요.'} value={userPw} onChange={handleInputPw} />
      <Button size='lg' onClick={handleBtnLogin}>로그인</Button>
    </>
  );
};

export default Login;
