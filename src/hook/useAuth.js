import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginState, userId } from '../recoil/atom/loginState';
import axios from 'axios';
import { useNavigate } from 'react-router';

const useAuth = () => {
  const setAtomUserId = useSetRecoilState(userId);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  const handleLogin = async (userId, userPw) => {
    try {
      const res = await axios.get('http://localhost:3002/users', {
        params: { username: userId, password: userPw },
      });
      const user = res.data[0];
      if (user) {
        setIsLoggedIn(true);
        setAtomUserId(userId);
        localStorage.setItem('token', userId);
        return true;
      } else {
        alert('아이디나 패스워드를 확인해주세요.');
        return false;
      }
    } catch (err) {
      console.error(`login error ::${err}`);
      alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
      return false;
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
  };

  return { isLoggedIn, handleLogin, handleLogout };
};

export default useAuth;
