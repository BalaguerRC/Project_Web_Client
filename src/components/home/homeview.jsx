import { Box, Button, ButtonBase, Container, Grid, Typography, styled } from "@mui/material";
import ListProductCategory from "./listProductCategory";
import homeimg from "../../assets/homeimg2.png";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
    const navigate = useNavigate();
    return <div >
        <div style={{ backgroundImage: `url(${homeimg})`, backgroundSize:"cover", width: "auto", height: 900}}>
            <Box sx={{ alignItems: "center", display: "grid", }}>
                <Grid container marginTop={90} marginBottom={10} textAlign={"center"}>
                    <Container fixed>
                        <Button variant="contained" onClick={()=>navigate("products")}>Products</Button>
                    </Container>
                </Grid>
            </Box>
        </div>

        <ListProductCategory />
    </div>
}

export default HomeView;