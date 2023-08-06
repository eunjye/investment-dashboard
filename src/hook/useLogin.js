import { useRecoilState } from 'recoil';
import { loginState } from '../recoil/atom/loginState';
import axios from 'axios';

const useLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  
  const handleLogin = (userId, userPw) => {
    axios.get('http://localhost:3000/users', { params: { username: userId, password: userPw }})
      .then((res) => {
        const user = res.data[0];
        if (user) {
          setIsLoggedIn(true);
          localStorage.setItem('token', 'loggedIn');
          return;
        }
        alert('아이디나 패스워드를 확인해 주세요.')
      })
      .catch((err)=> {
        console.error(`login error ::${err}`);
      });
  };

  return { isLoggedIn, setIsLoggedIn, handleLogin };
};

export default useLogin;