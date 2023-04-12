import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";

const Bills = () => {
    const { id } = useParams();
    console.log("ID de", id)
    const FacturaRef = useRef();
    const [maxID, setMaxID] = useState();
    const [compra, setCompra] = useState({});
    //let date= new Date();
    const getToken = localStorage.getItem("Token");


    const response = async () => {
        await fetch(import.meta.env.VITE_URL + "/Compra/" + id, {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(res => res.json()).then(data => {
            console.log(data.data)
            setCompra({
                id: data.data.id_compra,
                username: data.data.userName,
                id_product: data.data.id_product,
                productName: data.data.productName,
                amount: data.data.amount,
                price: data.data.price,
                date: data.data.date.slice(0, 10),
                time: data.data.date.slice(11, 16)
            })

        }).catch(err => console.log(err))
    }

    useEffect(() => {
        response()
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
                                <Typography variant="subtitle2" sx={{ textAlign: "right" }}>$ {compra.price}</Typography>
                            </Grid>
                        </Grid>
                        <Divider sx={{ background: "black" }} />
                        <CardContent sx={{ p: 3 }}>
                            <Grid container direction={"row"}>
                                <Grid item xs>
                                    <Grid container direction={"column"}>
                                        <Grid item>
                                            <Typography variant="h6" fontSize={18}>Factura a:</Typography>
                                            <Typography variant="subtitle2">{compra.username}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" fontSize={18}># de factura:</Typography>
                                            <Typography variant="subtitle2">{compra.id}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction={"column"}>
                                        <Grid item>
                                            <Typography variant="h6" fontSize={18}>Fecha de compra:</Typography>
                                            <Typography variant="subtitle1" fontSize={14}>{compra.date}</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h6" fontSize={18}>Hora de compra:</Typography>
                                            <Typography variant="subtitle1" fontSize={14}>{compra.time}</Typography>
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
                                            <TableRow>
                                                <TableCell sx={{ color: "black" }}>{compra.id_product}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{compra.productName}</TableCell>
                                                <TableCell sx={{ color: "black" }}>0</TableCell>
                                                <TableCell sx={{ color: "black" }}>{compra.amount}</TableCell>
                                                <TableCell sx={{ color: "black" }}>{compra.price}</TableCell>
                                            </TableRow>
                                            {/*item.data && getReport.data.map((item, i) => (
                                                <TableRow key={i}>
                                                    <TableCell sx={{ color: "black" }}>{item.id_prod}</TableCell>
                                                    <TableCell sx={{ color: "black" }}>{item.prod_name}</TableCell>
                                                    <TableCell sx={{ color: "black" }}>{item.price}</TableCell>
                                                    <TableCell sx={{ color: "black" }}>{item.quantity}</TableCell>
                                                    <TableCell sx={{ color: "black" }}>{totalPrice.toFixed(2)}</TableCell>
                                                </TableRow>
                                            ))*/}
                                        </TableBody>
                                    </Table>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ color: "black" }}>Subtotal</TableCell>
                                                <TableCell align="right" sx={{ color: "black" }}>$ {compra.price}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ color: "black" }}>Descuento</TableCell>
                                                <TableCell align="right" sx={{ color: "black" }}>$ 0.00</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell sx={{ color: "black" }}>Total</TableCell>
                                                <TableCell align="right" sx={{ color: "black" }}>$ {compra.price}</TableCell>
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
export default Bills;