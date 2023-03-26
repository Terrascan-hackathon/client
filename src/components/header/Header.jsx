import React from 'react'
import { IconButton, Toolbar, Typography, Box, Button, AppBar as MuiAppBar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/modelActions';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Header = (props) => {
    const { open, handleDrawerOpen } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const role = useSelector((state)=> state?.userState?.user?.role)
    const isLoggedIn = useSelector((state)=> state?.userState?.isLoggedIn)

    const displayRole = role?.toUpperCase();

    const handleLogout = () => {
        dispatch(logout());
    }


    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ccc'}}>
                    <Box sx={{width:'300px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        TerraScan.app
                    </Typography>
                    </Box>
                    <Box >
                        <Typography variant="h6" noWrap component="div">
                            {displayRole}
                        </Typography>
                    </Box>
                    { isLoggedIn ?
                        <Button  variant="contained" sx={{color:"#fff" , backgroundColor: '#00f'}} onClick={handleLogout}>Logout</Button>
                    :
                        <Button variant="outlined" onClick={()=> navigate('/login') } startIcon={<AccountCircleIcon />}>
                            Sing-in
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header