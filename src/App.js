/** @jsxImportSource @emotion/react */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './style/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <NavbarLayout />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;
