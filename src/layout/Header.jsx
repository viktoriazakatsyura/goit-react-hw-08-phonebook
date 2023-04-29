import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getIsLoggedIn } from '../redux/auth/selectors';
import { UserMenu } from '../components/UserMenu/UserMenu';
import { Login } from '../components/LoginForm/LoginForm';
import css from './Header.module.css';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </Typography>
          {isLoggedIn ? <UserMenu /> : <Login/>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
