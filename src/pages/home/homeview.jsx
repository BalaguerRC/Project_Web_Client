import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
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

    return <div>
        <Box sx={{ backgroundColor: '#265c66', alignItems: "center", display: "grid" }}>
            <Grid container marginTop={20} marginBottom={20} textAlign={"center"}>
                <Container fixed>
                    <Typography variant="h5" gutterBottom>Hello there</Typography>
                    <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                    <Button variant="contained">Go</Button>
                </Container>
            </Grid>
        </Box>

        <Box sx={{ justifyContent: "center", alignItems: "center" }}>
            <Box marginTop={10}>
                <Box
                    sx={{
                        justifyContent: "center",
                        p: 4,
                        margin: "auto",
                        maxWidth: 900,
                        flexGrow: 1,
                    }}
                >
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid item marginRight={1.8}>
                            <Typography variant="h4" gutterBottom>Test</Typography>
                        </Grid>

                        <Grid item xs sm container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <ImageProduct />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box >

        <Box sx={{ justifyContent: "center", alignItems: "center", backgroundColor: "#265c66"}}>
            <Box marginTop={10}>
                <Box
                    sx={{
                        justifyContent: "center",
                        p: 4,
                        margin: "auto",
                        maxWidth: 900,
                        flexGrow: 1,
                    }}
                >
                    <Grid container spacing={3} justifyContent={"center"}>
                        <Grid item marginRight={1.8}>
                            <Typography variant="h4" gutterBottom>Test</Typography>
                        </Grid>
                        <Grid item xs sm container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <CategoryId2 />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs sm container>
                            <Grid item xs container direction="column">
                                <Grid item xs>
                                    <CategoryId1 />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box >

    </div>
}

export default HomeView;