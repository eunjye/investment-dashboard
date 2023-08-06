import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginState, userId } from '../recoil/atom/loginState';
import axios from 'axios';
import { useNavigate } from 'react-router';

const useAuth = () => {
  const setAtomUserId = useSetRecoilState(userId);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const navigate = useNavigate();

  const handleLogin = async (userId, userPw) => {
    const state = await axios.get('http://localhost:3000/users', { params: { username: userId, password: userPw }})
      .then((res) => {
        const user = res.data[0];
        if (user) {
          setIsLoggedIn(true);
          setAtomUserId(userId);
          localStorage.setItem('token', 'loggedIn');
          return true;
        }
        alert('아이디나 패스워드를 확인하세요.');
        return false;
      })
      .catch((err)=> {
        console.error(`login error ::${err}`);
      });

    return state;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    navigate('/');
  }

  return { isLoggedIn, setIsLoggedIn, handleLogin, handleLogout };
};

export default useAuth;