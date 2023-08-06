import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NavbarLayout from '../component/layout/NavbarLayout';
import { PATH_PRIVATE_ROOT } from '../constant/path';

const PrivateRoute = (Component) => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if(location.pathname === '/private') {
    return <Navigate to={PATH_PRIVATE_ROOT} replace />;
  }
  return (
    <NavbarLayout>
      <Outlet />
    </NavbarLayout>
  );
};

export default PrivateRoute;
