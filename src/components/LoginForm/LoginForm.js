import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css';

export const Login = () => {
  return (
    <>
      <Link to="/login" className={css.loginLink}>
        <Button color="inherit">Log in</Button>
      </Link>
      <Link to="/registration" className={css.loginLink}>
        <Button color="inherit">Sign up</Button>
      </Link>
    </>
  );
};