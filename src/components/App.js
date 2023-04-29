import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Container} from '../layout/Container';
import { fetchCurrentUser } from '../redux/auth/operations';
import {
  getIsRefreshing,
  getIsError,
  getErrorMessage,
} from '../redux/auth/selectors';
import { Loader } from './Loader/Loader';
import { ToastContainer } from 'react-toastify';
import { useNotify } from '../hooks/useNotify';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  const isError = useSelector(getIsError);
  const errorMessage = useSelector(getErrorMessage);
  const { showFailure } = useNotify();

  useEffect(() => {
    if (isError) {
      showFailure(errorMessage);
    }
  }, [errorMessage, isError, showFailure]);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route
            index
            element={
              <PublicRoute component={<Home />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} redirectTo="/" />}
          />
          <Route
            path="/login"
            element={
              <PublicRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ToastContainer />
    </>
  );
}