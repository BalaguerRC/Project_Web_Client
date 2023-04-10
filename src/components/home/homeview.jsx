import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ListProductCategory from "./listProductCategory";

const HomeView = () => {
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