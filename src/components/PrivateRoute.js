import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from '../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};

