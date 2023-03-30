import { AppBar, Avatar, Badge, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MenuIcon } from "@mui/icons-material/Menu"
import { Outlet, useNavigate } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const CarritoCantidad = 0;

const Home = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const getToken = localStorage.getItem("Token");

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("Token");
        localStorage.removeItem("DATA");
        localStorage.removeItem("Carrito")
        navigate("/login");
    }

    const [carritoNumber, setCarritoNumber] = useState(0);

    const CantidadCarrito = () => {
        const getCarrito = JSON.parse(localStorage.getItem("Carrito"))
        if (getCarrito != null) {
            setCarritoNumber(getCarrito.length)
        }

    }

    useEffect(() => {
        CantidadCarrito();
    }, [carritoNumber])
    return <div>
        <header>
            <AppBar position="fixed" variant="outlined">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Tienda
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                =
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={() => navigate("/")}>
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => navigate("products")}>
                                    <Typography textAlign="center">Productos</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => navigate("products")}>
                                    <Typography textAlign="center">About</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/"
                            >
                                Home
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                                href="/products"
                            >
                                Productos
                            </Button>
                            <Button
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                        </Box>
                        <Box sx={{ flexGrow: 0.03 }}>
                            <IconButton aria-label="cart" onClick={() => navigate("carrito")}>
                                <Badge badgeContent={carritoNumber} color="secondary">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" >Hi</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/*settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))*/}
                                <MenuItem >
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>
                                {getToken == null ? (<MenuItem onClick={() => navigate("login")}>
                                    <Typography textAlign="center">Login</Typography>
                                </MenuItem>) : (<MenuItem onClick={() => Logout()}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>)}

                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
        </header>
        <Grid paddingTop={9}>
            <Outlet />
        </Grid>

        <footer>
            <Box sx={{ textAlign: "center", height: "100%"}}>
                <Typography variant="h7">
                    Copyright © 2023 - All right reserved by NOTHING
                </Typography>
            </Box>
        </footer>
    </div >
}

export default Home;