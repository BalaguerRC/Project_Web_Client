import { AppBar, Avatar, Backdrop, Badge, Box, Button, CircularProgress, Container, Divider, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const CarritoCantidad = 0;

const Home = () => {
    const getToken = localStorage.getItem("Token");
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [Loading, setLoading] = useState(false)
    //const [Error, seTError] = useState(false)

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
            <AppBar position="fixed" //sx={{backgroundColor: "#265c66"}}
            >
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
                            Home
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
                                <MenuItem onClick={() => navigate("products")}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <ShoppingCartIcon />
                                    </IconButton>
                                    Productos
                                </MenuItem>
                                {getToken == null ? null
                                    : (
                                        <MenuItem onClick={() => navigate("carrito")}>
                                            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                                <ShoppingCartIcon />
                                            </IconButton>
                                            Carrito
                                        </MenuItem>
                                    )
                                }
                                <Divider />
                                <MenuItem onClick={() => navigate("products")}>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <ShoppingCartIcon />
                                    </IconButton>
                                    About
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
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
                            Home
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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
                        {getToken == null ? null
                            :
                            (<Box sx={{ flexGrow: 0.03, display: { xs: 'none', md: 'flex' } }}>
                                <IconButton aria-label="cart" onClick={() => navigate("carrito")}>
                                    <Badge badgeContent={carritoNumber} color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                            </Box>
                            )
                        }

                        <Box sx={{ flexGrow: 0 }}>
                            {getToken == null ?
                                (
                                    <Button variant="outlined" onClick={() => {
                                        setLoading(!Loading);
                                        setTimeout(() => {
                                            setLoading(!Loading);
                                            navigate("login")
                                        }, 1000)
                                    }}>
                                        Login
                                    </Button>
                                )
                                :
                                (
                                    <>
                                        <Tooltip title="Open settings">
                                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                <Avatar alt="Remy Sharp" >H</Avatar>
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
                                            <MenuItem onClick={() => navigate("profile")}>
                                                <Typography textAlign="center">Profile</Typography>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={() => Logout()}>
                                                <Typography textAlign="center">Logout</Typography>
                                            </MenuItem>

                                        </Menu>
                                    </>
                                )
                            }
                        </Box>
                    </Toolbar>
                </Container>

            </AppBar>
        </header>
        <Grid paddingTop={9}>
            <Outlet />
        </Grid>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={Loading}
        >
            <CircularProgress color="inherit" />
        </Backdrop>

        <footer>
            <Box sx={{ textAlign: "center", height: "100%" }}>
                <Typography variant="h7">
                    Copyright © 2023 - All right reserved by NOTHING
                </Typography>
            </Box>
        </footer>
    </div >
}

export default Home;