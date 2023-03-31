import { Box, Button, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import ImageProduct, { CategoryId1, CategoryId2 } from "./imageProduct";
import ListProductCategory from "./listProductCategory";

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

        
        <ListProductCategory/>

    </div>
}

export default HomeView;