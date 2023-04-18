import { Box, Breadcrumbs, Button, CircularProgress, Container, Divider, Grid, Link, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";

const Profile = () => {
    const [Loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const Logout = () => {
        setTimeout(() => {
            setLoading(!Loading)
            localStorage.removeItem("Token");
            localStorage.removeItem("DATA");
            localStorage.removeItem("Carrito")
            navigate("/login");
        }, 1500)
    }
    return <>

        <Box sx={{ flexGrow: 1}}
            paddingTop={1}>
            <Container>
                <Paper variant="outlined">
                    <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 1, sm: 8, md: 0 }} justifyContent={"center"}>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h4" pt={1} pb={1}>
                                <Button variant='text' onClick={() => navigate("/")}>
                                    {"< - "}
                                </Button>Home
                            </Typography>
                            <Divider></Divider>
                            <Grid container direction={"column"}>
                                <Paper sx={{ height: 399}}>
                                    <MenuList sx={{ height: "100%" }}>
                                        <Grid container direction={"column"} justifyContent={"space-between"} sx={{ height: "100%" }}>
                                            <Grid item>
                                                <MenuItem onClick={() => navigate("/profile")}>
                                                    <ListItemIcon>
                                                        <AccountCircleIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>Perfil</ListItemText>
                                                </MenuItem>
                                                <MenuItem onClick={() => navigate("historia")}>
                                                    <ListItemIcon>
                                                        <HistoryIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>Historial</ListItemText>
                                                </MenuItem>
                                                <MenuItem disabled>
                                                    <ListItemIcon>
                                                        <SettingsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>Opciones Avanzadas</ListItemText>
                                                </MenuItem>
                                                <Divider />
                                            </Grid>
                                            <Grid item >
                                                <MenuItem
                                                    onClick={() => {
                                                        setLoading(!Loading)
                                                        Logout()
                                                    }}>
                                                    <ListItemIcon>
                                                        <LogoutIcon />
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Cerrar sesion
                                                    </ListItemText>
                                                    {Loading ? (<CircularProgress size={20} />) : null}
                                                </MenuItem>
                                            </Grid>
                                        </Grid>
                                    </MenuList>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Grid item xs={2} sm={8} md>
                                <Paper sx={{ height: 458 }}>
                                    <Outlet />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    </>
}

export default Profile;