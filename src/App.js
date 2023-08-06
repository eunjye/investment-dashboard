/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './style/GlobalStyle';
import Login from './page/Login';
import PrivateRoute from './context/PrivateRoute';
import Mypage from './page/Mypage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <BrowserRouter>
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
