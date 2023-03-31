import { Alert, Autocomplete, Box, Breadcrumbs, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Container, Divider, Grid, IconButton, Link, Pagination, Paper, Skeleton, Snackbar, Stack, styled, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Products = () => {

    const [Product, setProduct] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    const getToken = localStorage.getItem("Token");
    const response = async () => {
        await fetch(import.meta.env.VITE_URL + "/ProductsPag/getProductClient", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setProduct(data.data)
            setTotalPage(data.totalPages)
        }).catch(err => console.log(err))
    }


    useEffect(() => {
        response()
    }, [])

    const navigate = useNavigate()

    //pagination

    const CurrentPage = async (value) => {
        await fetch(`${import.meta.env.VITE_URL}/ProductsPag/getProductClient?pageNumber=${value}&pageSize=12`, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setProduct(data.data)
        }).catch(err => console.log(err))
    }



    const handleChange = (event, value) => {
        setPage(value);
        console.log(value)
        CurrentPage(value)
    }

    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false)
    }
    return <>
        <div >
            <Box>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Container fixed>
                        <Typography variant="h5" gutterBottom>Productos</Typography>
                        <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"}> 
                            <Breadcrumbs separator=">" aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="" onClick={() => navigate("/")}>
                                    Home
                                </Link>
                                <Typography color="text.primary">
                                    Productos
                                </Typography>
                            </Breadcrumbs>

                            <Grid container direction={"row"} justifyContent={"flex-end"}>
                                <Autocomplete disablePortal
                                    id="combo-box-demo"
                                    options={Product && Product.map((item) => {
                                        return item.name
                                    })}
                                    sx={{ width: 300 }}
                                    renderInput={(p) => <TextField {...p} label="Buscar Producto" />}
                                />
                                <IconButton aria-label="cart" onClick={() => navigate("carrito")}>
                                    <SearchIcon />
                                </IconButton>
                            </Grid>

                        </Grid>


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
                                                    <Box sx={{ my: 0.1, mx: 0 }}>
                                                        <Grid container alignItems="center">
                                                            <Grid item xs>
                                                                <Typography gutterBottom variant="h6" component="div">
                                                                    {item.name}
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography gutterBottom variant="subtitle1" component="div">
                                                                    ${item.precio}
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
                                                            <Chip label={item.category} color="primary" />
                                                        </Stack>
                                                    </Box>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                })}
                            </Grid>
                        </Box>
                    </Container>

                    <Pagination count={totalPage} page={page} onChange={handleChange} />
                </Grid>
            </Box>
            <Snackbar open={Product===null ?  open: null} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
                <Alert severity="success">Token Expirado</Alert>
            </Snackbar>
        </div>

    </>
}

export default Products;