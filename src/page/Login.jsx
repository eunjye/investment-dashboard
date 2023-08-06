import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../component/atom/Input';
import Button from '../component/atom/Button';
import useAuth from '../hook/useAuth';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [isLogging, setIsLogging] = useState(false);
  const { isLoggedIn, handleLogin } = useAuth();

  const handleInputId = (event) => {
    setUserId(event.target.value);
  }
  const handleInputPw = (event) => {
    setUserPw(event.target.value);
  }

  const login = async () => {
    try {
      await handleLogin(userId, userPw);
      setIsLogging(false);
    } catch (err) {
      console.error(err);
      setIsLogging(false);
    }
  };

  const handleBtnLogin = () => {
    if (isLogging) return;
    setIsLogging(true);
  };

  useEffect(() => {
    if (isLogging) {
      login();
    }
  }, [isLogging]);

  if (isLoggedIn) {
    return <Navigate to="/private" replace /> // 첫번째 private 페이지로 리다이렉트
  }

  return (
    <>
      <h2>ID 입력</h2>
      <Input size='md' placeholder={'아이디를 입력해주세요.'} value={userId} onChange={handleInputId} />
      <h2>Password 입력</h2>
      <Input type="password" size='md' placeholder={'비밀번호를 입력해주세요.'} value={userPw} onChange={handleInputPw} />
      <Button size='lg' onClick={handleBtnLogin} disabled={isLogging}>로그인</Button>
    </>
  );
};

export default Login;