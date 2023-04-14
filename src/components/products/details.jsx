
//import { BookmarkAdd } from "@mui/icons-material";
//import { AspectRatio } from "@mui/icons-material";
//import { AspectRatio } from "@mui/icons-material";
import { InfoOutlined } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Alert, Box, Breadcrumbs, Button, ButtonBase, Card, CardMedia, CircularProgress, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, Grid, IconButton, InputLabel, Link, Menu, MenuItem, Paper, Select, Snackbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddCar } from '../car/car';

const Details = () => {

    const { id } = useParams();
    
    const [Product, setProduct] = useState({});
    const [Loading, setLoading] = useState(false);
    const [Loading2, setLoading2] = useState(false);
    const [Cantidad, setCantidad] = useState();
    const [CantidadProducto, setCantidadProducto] = useState(1);
    const getDataUser = JSON.parse(localStorage.getItem("DATA"))

    const [maxID, setMaxID] = useState();

    const getToken = localStorage.getItem("Token");
    const CatidadSuma = (quantity) => {
        const cantidadTotal = [...Array(quantity + 1).keys()].slice(1)
        setCantidad(cantidadTotal)
    }

    const response = async () => {
        await fetch("http://localhost:5081/api/Products/" + id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setProduct({
                id: data.data.id,
                name: data.data.name,
                description: data.data.description,
                precio: data.data.precio,
                author: data.data.author,
                category: data.data.category,
                image: data.data.image,
                quantity: data.data.quantity,
                date: data.data.date.slice(0, 10)
            })
            CatidadSuma(data.data.quantity)
        })
    }

    const [openDialog, setOpenDialog] = useState(false);

    const Buy = async (id, quantity) => {

        setCantidadProducto(1)

        await fetch(import.meta.env.VITE_URL + "/ProductsPag/" + id, {
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
                response();
            }
        }).catch(err => console.log("Error: " + err))
    }

    useEffect(() => {
        response()
    }, [])

    const navigate = useNavigate();

    const AddCarrito = (data) => {
        let Valid = false;
        const Carrito = JSON.parse(localStorage.getItem("Carrito"))
        setTimeout(() => {
            for (let i in Carrito) {
                if (data.id === Carrito[i].id) {
                    console.log("uno igual")
                    alert("Ya tiene este producto guardado")
                    setLoading2(Loading2)
                    Valid = !Valid;
                }
            }
            if (!Valid) {
                AddCar(data);
                setLoading2(Loading2)
                setOpen(true)
            }
        }, 1500)
    }

    /**factura */

    const MaxId = async () => {
        await fetch(import.meta.env.VITE_URL + "/Compra", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            },
        }).then(res => res.json()).then(data => {
            setMaxID(data.id)
            console.log(data.id)
        })
    }

    const Post = (reporte) => {
        fetch(import.meta.env.VITE_URL + "/Compra", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken
            },
            body: JSON.stringify(reporte)
        }).then(res => res.json()).then(data => {
            console.log(data)
            localStorage.removeItem("Report")
        }).catch(err => console.log(err))
    }

    const Post2 = (report) => {
        fetch(import.meta.env.VITE_URL + "/Report", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken
            },
            body: JSON.stringify(report)
        }).then(res => res.json()).then(data => {
            console.log(data)
            localStorage.removeItem("Report")
        }).catch(err => console.log(err))
    }

    const Response = (ReporteNew) => {
        console.log("response:", ReporteNew)
        const reporte = {
            id_compra: maxID + 1,
            id_user: ReporteNew.id_user,
            id_product: ReporteNew.data[0].id_prod,
            amount: ReporteNew.data[0].quantity,
            price: ReporteNew.data[0].price,
        }
        Post(reporte)
        const report = {
            id_compra: reporte.id_compra,
            total_price: `${reporte.price * reporte.amount}`
        }
        Post2(report)
    }
    const BuyProduct = (id, name, cantidad, precio, id_user) => {

        setTimeout(() => {
            setLoading(Loading);
            setOpenDialog(false);
            if (CantidadProducto > 1) {
                Buy(Product.id, Product.quantity - CantidadProducto);
            }
            else {
                Buy(Product.id, Product.quantity - 1);
            }
        }, 1500);

        const Reportenuevo = {
            data: [
                {
                    id_prod: id,
                    prod_name: name,
                    quantity: cantidad,
                    price: precio
                }
            ],
            id_user: id_user
        }
        setTimeout(() => {
            Response(Reportenuevo)
        }, 1000)
    }

    useEffect(() => {
        MaxId()
    }, [])

    const [open, setOpen] = useState(false);

    return <>
        <Box>
            <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center">
                <Container fixed>
                    <Grid>
                        <Typography variant="h4" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                            <Button variant='text' onClick={() => navigate("/products")}>
                                {"< - "}
                            </Button>Detalles del Producto
                        </Typography>
                    </Grid>


                    <Breadcrumbs separator=">" aria-label="breadcrumb" >
                        <Link underline="hover" key="1" component={"button"} color="inherit" onClick={() => navigate("/")}>
                            Home
                        </Link>
                        <Link key="2" color="text.primary" component={"button"} onClick={() => navigate("/products")}>
                            Productos
                        </Link>
                        <Typography key="3" color="text.primary" >
                            {id}
                        </Typography>,
                    </Breadcrumbs>

                    <Divider />

                    <Box marginTop={5}>
                        <Paper
                            sx={{
                                justifyContent: "center",
                                p: 3,
                                margin: "auto",
                                maxWidth: "auto",
                                flexGrow: 1,
                                backgroundColor: "#2b3246"
                            }}
                            variant="outlined"
                        >
                            <Grid container spacing={3} justifyContent={"center"}>
                                <Grid item marginRight={1.8}>
                                    <ButtonBase sx={{ maxWidth: 428, height: 428 }}>
                                        <CardMedia component="img"
                                            height="428"
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
                                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                - Codigo:
                                                <Typography variant="body2" gutterBottom color={"text.secondary"} marginLeft={0.5}>
                                                    {Product.id}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                - Descripcion:
                                                <Typography variant="body2" gutterBottom color={"text.secondary"} marginLeft={0.5}>
                                                    {Product.description}
                                                </Typography>
                                            </Typography>
                                            {Product.quantity == 0 ?
                                                null
                                                :
                                                (
                                                    <Grid >
                                                        <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                            - Cantidad:
                                                            <Typography variant="body1" color="text.secondary" marginLeft={0.5}>
                                                                {Product.quantity}
                                                            </Typography>
                                                        </Typography>

                                                    </Grid>

                                                )
                                            }
                                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                - Categoria:
                                                <Typography variant="body2" gutterBottom color={"text.secondary"} marginLeft={0.5}>
                                                    {Product.category}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                - Autor:
                                                <Typography variant="body2" gutterBottom color={"text.secondary"} marginLeft={0.5}>
                                                    {Product.author}
                                                </Typography>
                                            </Typography>
                                            <Typography variant="h6" gutterBottom sx={{ display: "flex", alignItems: "flex-end" }}>
                                                - Fecha Exportacion:
                                                <Typography variant="body2" gutterBottom color={"text.secondary"} marginLeft={0.5}>
                                                    {Product.date}
                                                </Typography>
                                            </Typography>
                                            {Product.quantity == 0 ?
                                                (
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        <Grid container direction={"row"} alignItems="center">
                                                            <InfoOutlined sx={{ color: "yellow" }} />
                                                            <Typography variant="" color="yellow">
                                                                Producto no disponible
                                                            </Typography>
                                                        </Grid>
                                                    </Typography>
                                                )
                                                :
                                                null
                                            }
                                        </Grid>
                                        <Grid item
                                            marginTop={"auto"}
                                            sx={{ justifyContent: "right", display: "flex", }}>
                                            {Product.quantity == 0 ?
                                                (
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        disabled
                                                    >
                                                        Comprar
                                                    </Button>
                                                )
                                                :
                                                (
                                                    <Button
                                                        variant="contained"
                                                        size="small"
                                                        // sx={{backgroundColor: "#7ecfbe"}}
                                                        onClick={() => {
                                                            //Buy(Product.id, Product.quantity - 1)
                                                            //CantidadSuma2()
                                                            //console.log(Cantidad)
                                                            setOpenDialog(true)

                                                        }}
                                                    >
                                                        Comprar
                                                    </Button>
                                                )
                                            }
                                            {Product.quantity == 0 ?
                                                (
                                                    <Button
                                                        variant="outlined"
                                                        size="small"
                                                        sx={{ marginLeft: 1 }}
                                                        startIcon={<AddShoppingCartIcon />}
                                                        disabled
                                                    >
                                                        Guardar
                                                    </Button>
                                                )
                                                :
                                                (
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
                                                                precio: Product.precio,
                                                                quantity: Product.quantity

                                                            }
                                                            setLoading2(!Loading2)
                                                            AddCarrito(data)
                                                        }}
                                                    >
                                                        Guardar
                                                        {Loading2 ? (<CircularProgress size={20} />) : null}
                                                    </Button>
                                                )
                                            }
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
        <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(!open)} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
            <Alert severity="success">Guardado en Carrito</Alert>
        </Snackbar>

        {/**Dialog */}
        <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
        >
            <DialogTitle>Comprar</DialogTitle>
            <DialogContent>
                <DialogContentText>Esta seguro de comprar este producto?</DialogContentText>
                <DialogContentText>- Si desea, especifique la cantidad que desea comprar:</DialogContentText>
                <FormControl sx={{ m: 1, minWidth: 120 }} variant="standard">
                    <InputLabel id="demo-simple-select-autowidth-label">Cantidad</InputLabel>
                    <Select
                        autoWidth
                        onChange={(event) => setCantidadProducto(event.target.value)}
                        value={CantidadProducto}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        {Cantidad && Cantidad.map((item, index) => {
                            //console.log(item[index])
                            if (item <= 10) {
                                if (item === 1) {
                                    null
                                }
                                else {
                                    return <MenuItem value={item} key={index}>{item} {item === 10 ? "MAX" : null}</MenuItem>
                                }
                            } else {
                                null
                            }
                        })}
                        {/*Cantidad && CantidadSuma2()*/}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                {Loading ? (<CircularProgress size={30} />) : null}
                <Button onClick={() => {
                    setLoading(!Loading)
                    //localStorage.removeItem("Report")
                    BuyProduct(Product.id, Product.name, CantidadProducto, Product.precio, getDataUser.id)
                    //console.log(CantidadProducto)
                }}>Comprar</Button>
                <Button onClick={() => setOpenDialog(false)}>Cancelar</Button>
            </DialogActions>
        </Dialog>
    </>
}

export default Details;