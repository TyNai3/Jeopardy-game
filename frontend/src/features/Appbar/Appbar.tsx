import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as api from '../../App/api';
import { Response } from '../Rega/types/UserState';
import { RootState } from '../reducer/store';

export default function ButtonAppBar():JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.userState);

  function handleLogout():void {
api.logout().then((res: Response) => res.message === 'Session destroy' && dispatch({ type: 'LOGOUT' }));
navigate('/');
  }

  return (
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jeopardy Game
          </Typography>
          {true && (
<Button><NavLink className="header__item" to="/auth/login">
                Login
        </NavLink>
</Button>
)}
          {true && (
<Button><NavLink className="header__item" to="auth/registration">
                Registration
        </NavLink>
</Button>
)}
          <button type="button" onClick={handleLogout}>hjfv</button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}
