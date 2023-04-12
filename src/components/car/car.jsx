import { Alert, Backdrop, Box, Breadcrumbs, Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Link, List, ListItem, Paper, Snackbar, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCarItem from "./productCarItem";
import Delete from "@mui/icons-material/Delete"

export const Carrito = JSON.parse(localStorage.getItem("Carrito")) || [];

const Car = () => {
    const [carrito2, setCarrito] = useState([])
    //const [precioTotal, setPrecioTotal] = useState(0);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    const [Loading2, setLoading2] = useState(false)

    const getToken = localStorage.getItem("Token");
    const getDataUser = JSON.parse(localStorage.getItem("DATA"))
    const Buy = async (id, quantity) => {
        console.log("esto es:", id, quantity)
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
                /**Fix */
                //localStorage.removeItem("Carrito");
                response();
            }
            console.log(data)
        }).catch(err => {
            console.log("Error: " + err)
            //handleClose();
        })
        handleClose();
    }

    /**
     * Dialog
     */
    const [openDialog, setOpenDialog] = useState(false);

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    /**
     * Dialog Delete
     */
    const [openDialog2, setOpenDialog2] = useState(false);

    const handleCloseDialog2 = () => {
        setOpenDialog2(false)
    }

    {/**only one */ }

    const [localId, setlocalId] = useState()
    const [localQuantity, setlocalQuantity] = useState()

    const handleClickOpen2 = (id, quantity) => {
        if (Carrito != 0) {
            setlocalId(id)
            setlocalQuantity(quantity)
            setOpenDialog(true);
        }
    };

    const BuyOneProduct = () => {
        setTimeout(() => {
            for (let i in carrito2) {
                if (localId === carrito2[i].id) {
                    console.log("posicion", i)
                    console.log("uno igual", carrito2[i])
                    /*const index= Carrito.indexOf(localId,i)
                    */
                    console.log("esto es id:", localId, " cantidad:", localQuantity)
                    Buy(localId, localQuantity - 1)
                    setlocalId()
                    setlocalQuantity()
                    Carrito.splice(i, 1)
                    console.log(Carrito)
                    localStorage.setItem("Carrito", JSON.stringify(Carrito))
                }
            }
            handleCloseDialog()
            setOpen2(true);
            response();
        }, 1000)

    }

    const handleClickOpenDelete = (id, quantity) => {
        if (Carrito != 0) {
            setlocalId(id)
            setlocalQuantity(quantity)
            setOpenDialog2(true);
        }
    };

    const DeleteOneProduct = () => {
        setTimeout(() => {
            for (let i in carrito2) {
                if (localId === carrito2[i].id) {
                    console.log("posicion", i)
                    console.log("uno igual", carrito2[i])
                    /*const index= Carrito.indexOf(localId,i)
                    */
                    console.log("esto es id:", localId, " cantidad:", localQuantity)
                    //Buy(localId, localQuantity - 1)
                    setlocalId()
                    setlocalQuantity()
                    Carrito.splice(i, 1)
                    console.log(Carrito)
                    localStorage.setItem("Carrito", JSON.stringify(Carrito))
                }
            }
            setLoading(Loading)
            handleCloseDialog2();
            setOpen3(!open3)
            response();
        }, 1000);
    }

    const handleClickOpen = () => {
        console.log(Carrito)
        if (Carrito != 0) {
            setOpen(true);
        }
    };

    //progress
    const [Loading, setLoading] = useState(false)
    const List = [];
    const report = {
        data: List,
        id_user: getDataUser.id
    }
    const handleClickBuy = () => {

        setLoading(!Loading)

        //console.log(report)
        //localStorage.setItem("Report", JSON.stringify(report))
        for (let i in carrito2) {
            setTimeout(() => {
                //Buy(carrito2[i].id, carrito2[i].quantity - 1)
                const datos = {
                    id_prod: carrito2[i].id,
                    prod_name: carrito2[i].name,
                    quantity: carrito2[i].quantity,
                    price: carrito2[i].precio
                }
                //console.log(report)
                List.push(datos)
                localStorage.setItem("Report", JSON.stringify(report))
                setLoading(!Loading)
            }, 2000)

        }
        /**
         * const report = {
                    data: [
                        {
                            id_prod: carrito2[i].id,
                            prod_name: carrito2[i].name,
                            quantity: carrito2[i].quantity,
                            price: carrito2[i].precio
                        }
                    ],
                    id_user: getDataUser.id
                }
         */
        //console.log(List)
        //localStorage.removeItem("Carrito");
    }
    const Actualizar = () => {
        const get = JSON.parse(localStorage.getItem("Report"));
        console.log(get)
    }

    const removeProductCar = () => {
        setLoading2(!Loading2)
        setTimeout(() => {
            localStorage.removeItem("Carrito");
            response();
            console.log("test")
            setLoading2(Loading2 === true)
            Carrito= []
        }, 2000)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const PrecioTotal = useRef(0);

    const response = () => {
        const getCarrito = JSON.parse(localStorage.getItem("Carrito"))
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
                                {carrito2 == null || carrito2 == 0 ?
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
                                Comprar todo
                            </DialogTitle>
                            <Divider />
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <Typography variant="h6">Productos:</Typography>
                                    {carrito2 && carrito2.map((item, value) =>
                                        <Typography variant="subtitle1" gutterBottom key={value} color={"text.secondary"}>{item.name} - ${item.precio}</Typography>
                                    )}
                                    <Typography variant="subtitle1" color={"text.secondary"}>
                                        Precio total: ${PrecioTotal.current} y Cantidad: {Carrito.length}
                                    </Typography>
                                </DialogContentText>
                            </DialogContent>
                            <Divider />
                            <DialogActions>
                                {Loading ? (<CircularProgress />) : null}
                                <Button onClick={handleClickBuy} autoFocus>
                                    Comprar
                                </Button>
                                <Button onClick={Actualizar}>Actualizar</Button>
                                <Button onClick={handleClose}>Cancelar</Button>
                            </DialogActions>
                        </Dialog>

                        <Divider></Divider>
                        <Box
                            paddingTop={1}
                            justifyContent="center">
                            <Grid container item spacing={5}>
                                {carrito2 == null || carrito2 == 0 ?
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
                                    return <Grid item xs={6} md={3} key={value}>
                                        <Card sx={{ maxWidth: 345, minWidth: 100, backgroundColor: "#2b3246" }} variant="outlined   ">

                                            <ProductCarItem id={item.id} name={item.name} price={item.precio} image={item.image} />

                                            <CardActions>
                                                <Button size="small" variant="contained" color="primary" onClick={() => handleClickOpen2(item.id, item.quantity)}>
                                                    Comprar
                                                </Button>
                                                <Button size="small" variant="outlined" color="primary" startIcon={<Delete />} onClick={() => handleClickOpenDelete(item.id, item.quantity)}>
                                                    Eliminar
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

        <Snackbar open={open2} autoHideDuration={3000} onClose={() => setOpen2(!open2)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Alert severity="success">Comprado</Alert>
        </Snackbar>
        <Snackbar open={open3} autoHideDuration={1000} onClose={() => setOpen3(!open3)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Alert severity="success">Eliminado</Alert>
        </Snackbar>

        {/**Dialog */}
        <Dialog
            open={openDialog}
            onClose={handleCloseDialog}
        >
            <DialogTitle>Comprar</DialogTitle>
            <DialogContent>
                <DialogContentText>Esta seguro?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={BuyOneProduct}>Comprar</Button>
                <Button onClick={handleCloseDialog}>Cancelar</Button>
            </DialogActions>
        </Dialog>
        {/**Dialog Delete*/}
        <Dialog
            open={openDialog2}
            onClose={handleCloseDialog2}
        >
            <DialogTitle>Eliminar</DialogTitle>
            <DialogContent>
                <DialogContentText>Esta seguro de eliminar el producto?</DialogContentText>

            </DialogContent>
            <DialogActions>
                {Loading ? (<CircularProgress size={30} />) : null}
                <Button onClick={() => {
                    setLoading(!Loading)
                    DeleteOneProduct()
                }}>Eliminar</Button>
                <Button onClick={handleCloseDialog2}>Cancelar</Button>
            </DialogActions>
        </Dialog>

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