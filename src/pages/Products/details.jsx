
//import { BookmarkAdd } from "@mui/icons-material";
//import { AspectRatio } from "@mui/icons-material";
//import { AspectRatio } from "@mui/icons-material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Avatar, Box, Breadcrumbs, Button, ButtonBase, Card, CardMedia, Container, Divider, Grid, IconButton, Link, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddCar, Carrito } from '../Car/car';
import { CarritoCantidad } from '../home/home';

const Details = () => {

    const { id } = useParams();
    console.log(id)
    const [Product, setProduct] = useState({});


    const getToken = localStorage.getItem("Token");

    const response = async () => {
        await fetch("http://localhost:5081/api/Products/" + id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => setProduct({
            id: data.data.id,
            name: data.data.name,
            description: data.data.description,
            precio: data.data.precio,
            author: data.data.author,
            category: data.data.category,
            image: data.data.image,
            quantity: data.data.quantity,
            date: data.data.date.slice(0, 10)
        }))
        console.log(Product)
        const getCarrito = JSON.parse(localStorage.getItem("Carrito"))
    }
    //.slice(0, 10)


    useEffect(() => {
        response()
        console.log(Product.image)
    }, [])

    const navigate=useNavigate();

    const AddCarrito = async (data) => {
        await AddCar(data);
    }
    return <>
        <Box>

            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Container fixed>
                    <Button variant='contained' onClick={()=>navigate("/products")}>
                        {"<-Back"}
                    </Button>
                    <Typography variant="h5" gutterBottom>Productos</Typography>

                    <Breadcrumbs separator=">" aria-label="breadcrumb">
                        <Link underline="hover" key="1" color="inherit">
                            Home
                        </Link>
                        <Typography key="2" color="text.primary">
                            Productos
                        </Typography>
                        <Typography key="2" color="text.primary">
                            {id}
                        </Typography>,
                    </Breadcrumbs>

                    <Divider />

                    <Box marginTop={10}>
                        <Paper
                            sx={{
                                justifyContent: "center",
                                p: 4,
                                margin: "auto",
                                maxWidth: 900,
                                flexGrow: 1,
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                            }}
                        >
                            <Grid container spacing={3} justifyContent={"center"}>
                                <Grid item marginRight={1.8}>
                                    <ButtonBase sx={{ width: 228, height: 228 }}>
                                        <CardMedia component="img"
                                            height="294"
                                            image={Product.image == null ? "/src/assets/signo.png" : Product.image}
                                            alt="product"
                                            sx={{
                                                margin: 'auto',
                                                display: 'block',
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                borderRadius: 3
                                            }}>
                                        </CardMedia>

                                    </ButtonBase >
                                </Grid>

                                <Grid item xs={12} sm container>
                                    <Grid item xs container direction="column" spacing={2}>
                                        <Grid item xs>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {Product.name}
                                            </Typography>
                                            <Typography gutterBottom variant="" component="div">
                                                Detalles
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Codigo:
                                                <Typography variant="" gutterBottom>
                                                    {Product.id}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Descripcion:
                                                <Typography variant="" gutterBottom>
                                                    {Product.description}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Cantidad:
                                                <Typography variant="" color="text.secondary">
                                                    {Product.quantity}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Categoria:
                                                <Typography variant="" gutterBottom>
                                                    {Product.category}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Autor:
                                                <Typography variant="" gutterBottom>
                                                    {Product.author}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="subtitle1" gutterBottom>
                                                - Fecha Exportacion:
                                                <Typography variant="" gutterBottom>
                                                    {Product.date}
                                                </Typography>
                                            </Typography>
                                        </Grid>
                                        <Grid item
                                            marginTop={"auto"}
                                            sx={{ justifyContent: "right", display: "flex", }}>
                                            <Button
                                                variant="contained"
                                                size="small"
                                            >
                                                Comprar
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{ marginLeft: 1 }}
                                                startIcon={<AddShoppingCartIcon />}
                                                onClick={() => {
                                                    const data = {
                                                        id: id,
                                                        name: Product.name,
                                                        image: Product.image,
                                                        precio: Product.precio

                                                    }
                                                    AddCarrito(data)
                                                    //Carrito.push({id:id,name: Product.name})
                                                }}
                                            >
                                                Guardar
                                            </Button>

                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle" component="div">
                                            ${Product.precio}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Container>

            </Grid>
        </Box>

    </>
}

export default Details;