import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = (Component) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
