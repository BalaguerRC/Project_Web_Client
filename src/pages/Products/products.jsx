import { Box, Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, Divider, Grid, Link, Pagination, Paper, Skeleton, Stack, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";

const Products = () => {

    const [Product, setProduct] = useState([]);

    const getToken = localStorage.getItem("Token");
    const response = async () => {
        await fetch("http://localhost:5081/api/Products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => setProduct(data)).catch(err => console.log(err))
    }


    useEffect(() => {
        response()
    }, [])

    const navigate = useNavigate()

    return <>
        <Box>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Container fixed>
                    <Typography variant="h5" gutterBottom>Productos</Typography>

                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        <Link underline="hover" key="1" color="inherit">
                            Home
                        </Link>
                        <Typography key="2" color="text.primary">
                            Productos
                        </Typography>,
                    </Breadcrumbs>

                    <Divider />

                    <Box
                        /*spacing={1}*/
                        paddingTop={1}
                        justifyContent="center"

                    /*spacing={2}*/>
                        <Grid container item spacing={5}>
                            {Product && Product.map((item, value) => {
                                return <Grid item xs={6} md={3} key={item.id}>
                                    <Card sx={{ maxWidth: 345, minWidth: 100, backgroundColor: "#2b3246" }} variant="outlined">
                                        <CardActionArea onClick={() => navigate("/products/details/" + item.id)}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={item.image == null ? "/src/assets/signo.png" : item.image}
                                                alt="green iguana"
                                            />
                                            <CardContent>
                                                <Typography variant="button" color="text.primary">
                                                    {item.name}
                                                </Typography>
                                                <Divider />
                                                <Typography gutterBottom variant="body2">
                                                    Categoria:
                                                </Typography>
                                                <Stack direction="row" spacing={1}>
                                                    <Chip label={item.category} color="primary"/>
                                                </Stack>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                Share
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            })}


                        </Grid>

                    </Box>

                </Container>
                <Pagination count={3} />
            </Grid>
        </Box>
    </>
}

export default Products;