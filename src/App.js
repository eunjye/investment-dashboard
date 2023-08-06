/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';
import Login from './page/Login';
import PrivateRoute from './context/PrivateRoute';
import Mypage from './page/Mypage';
import Main from './page/Main';


const App = () => {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="private" element={<PrivateRoute />}>
            <Route path="mypage" element={<Mypage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
