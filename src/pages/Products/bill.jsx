import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";

const Bill = () => {
    const FacturaRef = useRef();
    const [maxID, setMaxID] = useState();
    //let date= new Date();

    const getDataUser = JSON.parse(localStorage.getItem("DATA"))
    //console.log(getDataUser)
    const getReport = JSON.parse(localStorage.getItem("Report"))
    console.log(getReport)

    let totalPrice = getReport.data[0].price * getReport.data[0].quantity
    const getToken = localStorage.getItem("Token");

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
    const Post=(reporte)=>{
        fetch(import.meta.env.VITE_URL + "/Compra", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getToken
            },
            body: JSON.stringify(reporte)
        }).then(res => res.json()).then(data => console.log(data)).catch(err => console.log(err))
    }
    const Response = () => {
        for (let i in getReport.data) {
            const reporte = {
                id_compra: maxID + 1,
                id_user: getReport.id_user,
                id_product: getReport.data[i].id_prod,
                amount: getReport.data[i].quantity,
                price: `$ ${totalPrice.toFixed(2)}`,
            }
            console.log(reporte)
            Post(reporte)
        }
    }
    useEffect(() => {
        MaxId()
    }, [])
    return <>

        <Grid container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            pt={2}
        >
            <Container fixed>
                <Card ref={FacturaRef} sx={{ m: "auto", background: "white", color: "black", maxWidth: 572 }} >
                    <Grid container direction={"row"} sx={{ backgroundColor: "#bbbbbb", color: "black", p: 3 }}>
                        <Grid item xs>
                            <Typography variant="button" fontSize={18} fontWeight={700}>Tienda V</Typography>
                            <Typography variant="subtitle2">Albert R.</Typography>
                            <Typography variant="subtitle2">albert@exa.com</Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="button" fontSize={20} fontWeight={800}>Factura</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" fontSize={18} fontWeight={700}>Precio total:</Typography>
                            <Typography variant="subtitle2" sx={{ textAlign: "right" }}>$ {totalPrice.toFixed(2)}</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ background: "black" }} />
                    <CardContent sx={{ p: 3 }}>
                        <Grid container direction={"row"}>
                            <Grid item xs>
                                <Grid container direction={"column"}>
                                    <Grid item>
                                        <Typography variant="h6" fontSize={18}>Factura a:</Typography>
                                        <Typography variant="subtitle2">{getDataUser.name}</Typography>
                                        <Typography variant="subtitle2">{getDataUser.email}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" fontSize={18}># de factura:</Typography>
                                        <Typography variant="subtitle2">{maxID}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction={"column"}>
                                    <Grid item>
                                        <Typography variant="h6" fontSize={18}>Fecha de compra:</Typography>
                                        <Typography variant="subtitle1" fontSize={14}>10-09-2003</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" fontSize={18}>Hora de compra:</Typography>
                                        <Typography variant="subtitle1" fontSize={14}>10:00 pm</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </CardContent>
                    <Divider sx={{ background: "black" }} />
                    <CardContent sx={{ p: 3 }}>
                        <Grid container direction={"row"}>
                            <TableContainer sx={{ backgroundColor: "#ededed" }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Codigo</TableCell>
                                            <TableCell sx={{ color: "black" }}>Nombre</TableCell>
                                            <TableCell sx={{ color: "black" }}>$ - Precio</TableCell>
                                            <TableCell sx={{ color: "black" }}>Cantidad</TableCell>
                                            <TableCell sx={{ color: "black" }}>Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* <TableRow>
                                            <TableCell sx={{ color: "black" }}>{getReport.data[0].id_prod}</TableCell>
                                            <TableCell sx={{ color: "black" }}>{getReport.data[0].prod_name}</TableCell>
                                            <TableCell sx={{ color: "black" }}>{getReport.data[0].price}</TableCell>
                                            <TableCell sx={{ color: "black" }}>{getReport.data[0].quantity}</TableCell>
                                            <TableCell sx={{ color: "black" }}>{totalPrice.toFixed(2)}</TableCell>
                                        </TableRow> */}
                                        {getReport.data && getReport.data.map((item, i) => (
                                            <TableRow key={i}>
                                                <TableCell sx={{ color: "black" }}>{item.id_prod}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{item.prod_name}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{item.price}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{item.quantity}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{totalPrice.toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Subtotal</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ {totalPrice.toFixed(2)}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Descuento</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ 0.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Total</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ {totalPrice.toFixed(2)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </CardContent>
                    <Divider sx={{ background: "black" }} />
                    <Grid container direction={"row"} justifyContent="center" sx={{ backgroundColor: "#bbbbbb", color: "black", p: 1 }}>
                        <Typography variant="body1" gutterBottom>Gracias por comprar en nuestra tienda</Typography>
                    </Grid>
                    <Divider sx={{ background: "black" }} />
                </Card>
            </Container>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button variant="contained" onClick={Response}>Response</Button>
            </CardActions>
        </Grid>
        <ReactToPrint
            content={() => FacturaRef.current}
            trigger={() =>
            (
                <CardActions sx={{ justifyContent: "center" }}>
                    <Button variant="contained">Descargar</Button>
                </CardActions>
            )}
        />
    </>
}
export default Bill;