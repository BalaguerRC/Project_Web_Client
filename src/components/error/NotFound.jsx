import { Grid, Typography } from "@mui/material";

const NotFound = () => {
    return <div>
        <Grid container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            >
            <Grid item xs>
                <Typography variant="h4"> 404 | Not Found</Typography>
            </Grid>
        </Grid>
    </div>
}

export default NotFound;