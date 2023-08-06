import { atom } from 'recoil';

export const loginState = atom({
  key: 'loginState',
  default: localStorage.getItem('token') !== null, // 초기 로그인 상태는 로컬 스토리지의 토큰 존재 여부로 판단
});
