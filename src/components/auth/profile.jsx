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
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginTop={2}>
            <Container fixed>
                <Box
                    /*spacing={1}*/
                    paddingTop={1}
                    justifyContent="center"
                    sx={{
                        margin: "auto",
                        width: "auto",
                    }}
                >
                    <Paper>
                        <Grid container item spacing={{ xs: 1, md: 0 }} columns={{ xs: 2, sm: 7, md: 10 }} sx={{ height: 357 }}>
                            <Grid item xs={2} sm={8} md={5}>
                                <Typography variant="h4" pt={1} pb={1}>
                                    <Button variant='text' onClick={()=>navigate("/")}>
                                        {"< - "}
                                    </Button>Home
                                </Typography>
                                <Divider></Divider>
                                <Grid container direction={"column"} justifyContent={"flex-end"}>
                                    <Paper sx={{ height: 299 }}>
                                        <MenuList sx={{ display: "grid" }}>
                                            <MenuItem onClick={() => navigate("/profile")}>
                                                <ListItemIcon>
                                                    <AccountCircleIcon />
                                                </ListItemIcon>
                                                <ListItemText>Perfil</ListItemText>
                                            </MenuItem>
                                            <MenuItem onClick={() => navigate("historia")}>
                                                <ListItemIcon>
                                                    <HistoryIcon/>
                                                </ListItemIcon>
                                                <ListItemText>Historial</ListItemText>
                                            </MenuItem>
                                            <MenuItem disabled>
                                                <ListItemIcon>
                                                    <SettingsIcon/>
                                                </ListItemIcon>
                                                <ListItemText>Opciones Avanzadas</ListItemText>
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem sx={{ marginTop: 15 }}
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
                                        </MenuList>
                                    </Paper>
                                </Grid>

                            </Grid>
                            <Grid item xs={2} sm={8} md>
                                <Paper sx={{ height: 358 }}>
                                    <Outlet />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </Container>
        </Grid>
    </>
}

export default Profile;