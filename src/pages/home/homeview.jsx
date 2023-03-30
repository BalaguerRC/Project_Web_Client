import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import ImageProduct, { CategoryId1, CategoryId2 } from "./imageProduct";

const HomeView = () => {
    const getToken = localStorage.getItem("Token");
    /*const GetProductID1 = async () => {
        await fetch("http://localhost:5081/api/ProductsById/1", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => console.log(data))
    }*/
    const GetProduct = async () => {
        await fetch("http://localhost:5081/api/Products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => console.log(data))
    }

    useEffect(() => {
        //GetProductID1();
        //GetProduct();
    })

    return <div >
        <Box sx={{ alignItems: "center", display: "grid" }}>
            <Grid container marginTop={35} marginBottom={40} textAlign={"center"}>
                <Container fixed>
                    <Typography variant="h5" gutterBottom>Hello there</Typography>
                    <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                    <Button variant="contained">Go</Button>
                </Container>
            </Grid>
        </Box>

        {/*<Box sx={{ backgroundColor: "#265c66", p: 7, margin: "auto", flexGrow: 1 }}>
            <Grid container spacing={3} direction={"row"} alignItems="center" justifyContent="center">
                <Grid item marginRight={1.8}>
                    <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
                        <Typography variant="h4" gutterBottom>Productos</Typography>
                        <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                    </Box>
                </Grid>
                <Grid item sm>
                    <Divider orientation="vertical" flexItem></Divider>
                </Grid>
                <Grid item sm container paddingLeft={2}>
                    <Grid item container direction="column" justifyContent={"center"} alignItems={"center"}>
                        <Grid item xs>
                            <ImageProduct />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
</Box >*/}
        <Box sx={{ backgroundColor: "#265c66", flexGrow: 1 }}>
            <Box sx={{ justifyContent: "center", alignItems: "center", p: 7, margin: "auto", maxWidth: 1100,}}>

                <Grid container spacing={5}>
                    <Grid item marginRight={1.8}>
                        <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
                            <Typography variant="h4" gutterBottom>Productos</Typography>
                            <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs sm container>
                    <ImageProduct />
                    </Grid>
                </Grid>
            </Box >
        </Box >

        <Box sx={{ justifyContent: "center", alignItems: "center", p: 7, margin: "auto", maxWidth: 1100, flexGrow: 1, }}>

            <Grid container spacing={5}>
                <Grid item marginRight={1.8}>
                    <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
                        <Typography variant="h4" gutterBottom>Categoria</Typography>
                        <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                    </Box>
                </Grid>
                <Grid item xs sm container>
                    <CategoryId1 />
                </Grid>
            </Grid>
        </Box >

    </div>
}

export default HomeView;