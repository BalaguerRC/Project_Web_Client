import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ id, name, price, category, image }) => {

    const navigate = useNavigate();

    return <>
        <Card sx={{ maxWidth: 345, minWidth: 100, backgroundColor: "#2b3246" }} variant="outlined">
            <CardActionArea onClick={() => navigate("/products/details/" + id)}>
                <CardMedia
                    component="img"
                    height="140"
                    image={image == null ? "/src/assets/signo.png" : image}
                    alt="green iguana"
                />
                <CardContent>
                    <Box sx={{ my: 0.1, mx: 0 }}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                <Typography gutterBottom variant="h6" component="div">
                                    {name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography gutterBottom variant="subtitle1" component="div">
                                    ${price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider />
                    <Box sx={{ my: 0.1 }}>
                        <Typography gutterBottom variant="body2">
                            Categoria:
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Chip label={category} color="primary" />
                        </Stack>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}

export default ProductItem;