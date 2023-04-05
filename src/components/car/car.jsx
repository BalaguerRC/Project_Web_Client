import { Backdrop, Box, Breadcrumbs, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Link, List, ListItem, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const Car = () => {
    const [carrito2, setCarrito] = useState([])
    //const [precioTotal, setPrecioTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [Loading2, setLoading2] = useState(false)

    const getToken = localStorage.getItem("Token");

    const Buy = async (id, quantity) => {
        //console.log(id, quantity)
        fetch(import.meta.env.VITE_URL + "/ProductsPag/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken
            },
            body: JSON.stringify({
                quantity: quantity
            })
        }).then(res => res.json()).then(data => {
            if (data.succes === true) {
                console.log("data es: " + data)
                localStorage.removeItem("Carrito");
                response();
                //
            }
            console.log(data)
        }).catch(err => {
            console.log("Error: " + err)
            //handleClose();
        })
        handleClose();

    }

    const handleClickOpen = () => {
        console.log(Carrito)
        if (Carrito != 0) {
            setOpen(true);
        }
    };

    //progress
    const [Loading, setLoading] = useState(false)
    const handleClickBuy = () => {
        setLoading(!Loading)
        for (let i in carrito2) {
            setTimeout(() => {
                Buy(carrito2[i].id, carrito2[i].quantity - 1)
                setLoading(!Loading)
            }, 2000)
        }
    }

    const removeProductCar = () => {
        setLoading2(!Loading2)
        setTimeout(() => {
            localStorage.removeItem("Carrito");
            response();
            console.log("test")
            setLoading2(Loading2 === true)
        }, 2000)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const PrecioTotal = useRef(0);

    const response = () => {
        const getCarrito = JSON.parse(localStorage.getItem("Carrito"))
        //localStorage.setItem("Carrito", getCarrito)
        setCarrito(getCarrito)
        console.log(carrito2)
    }

    //**SUM */
    var total = 0;
    for (var i in carrito2) {
        total += parseFloat(carrito2[i].precio);
    }
    console.log(total)
    PrecioTotal.current = total + ".00";

    /**END */

    useEffect(() => {
        response()
    }, [])

    const navigate = useNavigate();

    return <>
        <Grid>
            <Box>
                <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                    <Container fixed>
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <Typography variant="h4" gutterBottom>
                                    <Button variant='text' onClick={() => navigate("/")}>
                                        {"< - "}
                                    </Button>Carrito
                                </Typography>
                                <Breadcrumbs separator=">" aria-label="breadcrumb" >
                                    <Link underline="hover" color="inherit" component={"button"} onClick={() => navigate("/")}>
                                        Home
                                    </Link>
                                    <Typography color="text.primary">
                                        Carrito
                                    </Typography>
                                </Breadcrumbs>
                            </Grid>
                            <Grid item xs>
                                <Grid container direction={"column"} justifyContent="center" alignItems={"flex-end"}>

                                    <Typography variant="caption" color={"text.secondary"}>
                                        Precio total: ${PrecioTotal.current}
                                    </Typography>
                                    <Typography variant="caption" color={"text.secondary"}>
                                        Cantidad: {Carrito.length}
                                    </Typography>
                                </Grid>
                                {carrito2 == null ?
                                    (
                                        <Grid container direction={"row"} justifyContent="flex-end" alignItems={"center"}>
                                            <ButtonGroup variant="outlined" >
                                                <Button variant="outlined" disabled>Comprar todo</Button>
                                                <Button variant="outlined" disabled>Eliminar todo</Button>
                                            </ButtonGroup>
                                        </Grid>
                                    )
                                    :
                                    (
                                        <Grid container direction={"row"} justifyContent="flex-end" alignItems={"center"}>
                                            <ButtonGroup variant="outlined" >
                                                <Button variant="outlined" onClick={handleClickOpen}>Comprar todo</Button>
                                                <Button variant="outlined" onClick={removeProductCar}>Eliminar todo</Button>
                                            </ButtonGroup>
                                        </Grid>
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Dialog open={open}
                            onClose={handleClose}
                            fullWidth
                            maxWidth={"xs"}
                        >
                            <DialogTitle id="alert-dialog-title">
                                Comprar Todo
                            </DialogTitle>
                            <Divider />
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant="h6">Productos:</Typography>
                                    {carrito2 && carrito2.map((item, value) =>
                                        <Typography variant="subtitle1" gutterBottom key={value} color={"text.secondary"}>{item.name} - ${item.precio}</Typography>
                                    )}
                                    <Typography variant="subtitle1" color={"text.secondary"}>
                                        Precio total: ${PrecioTotal.current}
                                    </Typography>
                                </DialogContentText>
                            </DialogContent>
                            <Divider />
                            <DialogActions>
                                {Loading ? (<CircularProgress />) : null}
                                <Button onClick={handleClickBuy} autoFocus>
                                    Comprar
                                </Button>
                                <Button onClick={handleClose}>Cancelar</Button>
                            </DialogActions>
                        </Dialog>

                        <Divider></Divider>
                        <Box
                            paddingTop={1}
                            justifyContent="center">
                            <Grid container item spacing={5}>
                                {carrito2 == null ?
                                    (
                                        <Grid item xs>
                                            <Paper sx={{ padding: 3, display: "grid", alignItems: "center", justifyContent: "center" }} elevation={2}>
                                                <Typography variant="h6" gutterBottom>
                                                    No tienes productos
                                                </Typography>
                                            </Paper>
                                        </Grid>
                                    )
                                    :
                                    null
                                }
                                {carrito2 && carrito2.map((item, value) => {
                                    //const num1= item.precio
                                    //setPrecioTotal({precio: item.precio});
                                    //console.log(num1)
                                    //const num1=  parseFloat(precioTotal)
                                    return <Grid item xs={6} md={3} key={value}>
                                        <Card sx={{ maxWidth: 345, minWidth: 100, backgroundColor: "#2b3246" }} variant="outlined   ">
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

                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button size="small" variant="contained" color="primary">
                                                    Comprar
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                })}
                            </Grid>
                        </Box>
                    </Container>
                </Grid>
            </Box>
        </Grid>
        <Backdrop
            sx={{ color: '#7eb8cf', zIndex: (theme) => theme.zIndex.drawer }}
            open={Loading2}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    </>
}

export default Car;

export const AddCar = (data) => {
    Carrito.push(data)
    console.log(Carrito)
    localStorage.setItem("Carrito", JSON.stringify(Carrito))
}