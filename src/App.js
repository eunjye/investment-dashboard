/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/GlobalStyle';
import NavbarLayout from './component/layout/NavbarLayout';
import Login from './page/Login';
import PrivateRoute from './context/PrivateRoute';
import Mypage from './page/Mypage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
          <NavbarLayout />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="private" element={<PrivateRoute />}>
              <Route path="mypage" element={<Mypage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
