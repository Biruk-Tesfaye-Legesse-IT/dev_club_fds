import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { styled, ThemeProvider } from '@mui/system';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip, Menu, MenuItem, ListItemIcon, Divider, Typography} from '@mui/material';

import {PersonAdd, Settings, Logout} from '@mui/icons-material';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../assets/icons/bell';
import { UserCircle as UserCircleIcon } from '../assets/icons/user-circle';
import { Users as UsersIcon } from '../assets/icons/users';
import theme from '../theme/theme';
import { logout } from '../../Business Layer/thunks/auth/auth.thunk';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const DashboardNavbarRoot = styled(AppBar)(( {theme} ) => ({
  
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

const Navbar = function (props) {
  const user = JSON.parse(sessionStorage.getItem('user'))
  const navigate = useNavigate()
  const { onSidebarOpen, logout, ...other } = props;

 

    useEffect(() => {
      if (props.account.accountUpdating) {
        let user = JSON.parse(sessionStorage.getItem('user'))
      }
      console.log(props.account.accountUpdating)
    }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    console.log('Logout Pressed');
    return navigate('/login');
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          {/* <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip> */}

          
          {/* <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip> */}

          <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
             <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src= { user.profile_picture}
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
          </IconButton>
        </Tooltip>
     
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {/* <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    
        </Toolbar>
      </DashboardNavbarRoot>
      </ThemeProvider>
    </>
  );
};

Navbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    account: state.account
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


