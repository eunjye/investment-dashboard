import { Navigate, Outlet } from 'react-router-dom';
import NavbarLayout from '../component/layout/NavbarLayout';

const PrivateRoute = (Component) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return (
    <NavbarLayout>
      <Outlet />
    </NavbarLayout>
  );
};

export default PrivateRoute;
