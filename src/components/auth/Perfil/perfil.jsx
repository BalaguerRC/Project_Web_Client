import { Avatar, Divider, Grid, Typography } from "@mui/material";

const Perfil = () => {

    const getData = JSON.parse(localStorage.getItem("DATA"))
    console.log(getData)
    return <>
        <Grid sx={{ p: 2 }}>
            <Typography variant="button" sx={{ fontSize: 22 }}>
                Perfil
            </Typography>
            <Divider></Divider>
            <Grid container direction={"row"} justifyContent={"center"}>
                <Avatar
                    alt="perfil"
                    src="src/assets/download2.png"
                    sx={{ width: 156, height: 156 }}
                />
            </Grid>
            <Divider>Datos</Divider>
            <Grid container direction={"row"} alignItems="flex-end" marginBottom={1} marginTop={1}>
                <Typography variant="button">
                    - Nombre:
                </Typography>
                <Typography variant="caption" color={"text.secondary"}>{getData.name}</Typography>
            </Grid>
            <Grid container direction={"row"} alignItems="flex-end" marginBottom={1} marginTop={1}>
                <Typography variant="button">
                    - Correo:
                </Typography>
                <Typography variant="caption" color={"text.secondary"}>{getData.email}</Typography>
            </Grid>
            <Grid container direction={"row"} alignItems="flex-end" marginBottom={1} marginTop={1}>
                <Typography variant="button">
                    - Fecha de nacimiento:
                </Typography>
                <Typography variant="caption" color={"text.secondary"}>{getData.date.substr(0, 10)}</Typography>
            </Grid>
        </Grid>
    </>
}

export default Perfil;