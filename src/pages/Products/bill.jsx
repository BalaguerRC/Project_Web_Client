import { Box, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Bill = () => {

    /*const handleGeneratePdf =()=>{
        const doc=new 
    }*/
    return <>
        <Grid container
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
           >
            <Container fixed>
                <Card sx={{ m: "auto", background: "white", color: "black", maxWidth: 572}} >
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
                            <Typography variant="subtitle2" sx={{textAlign: "right"}}>$ 200.00</Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ background: "black" }} />
                    <CardContent sx={{ p: 3 }}>
                        <Grid container direction={"row"}>
                            <Grid item xs>
                                <Typography variant="h6" fontSize={18}>Factura a:</Typography>
                                <Typography variant="subtitle2">nombre</Typography>
                                <Typography variant="subtitle2">correo</Typography>
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
                                            <TableCell sx={{ color: "black" }}>ID</TableCell>
                                            <TableCell sx={{ color: "black" }}>Nombre</TableCell>
                                            <TableCell sx={{ color: "black" }}>$ - Precio</TableCell>
                                            <TableCell sx={{ color: "black" }}>Cantidad</TableCell>
                                            <TableCell sx={{ color: "black" }}>Total</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>1</TableCell>
                                            <TableCell sx={{ color: "black" }}>Test</TableCell>
                                            <TableCell sx={{ color: "black" }}>200.00</TableCell>
                                            <TableCell sx={{ color: "black" }}>1</TableCell>
                                            <TableCell sx={{ color: "black" }}>200.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                                <Table>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Subtotal</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ 200.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Descuento</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ 0.00</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ color: "black" }}>Total</TableCell>
                                            <TableCell align="right" sx={{ color: "black" }}>$ 200.00</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </CardContent>
                    <Divider sx={{ background: "black" }} />
                    <Grid container direction={"row"} justifyContent="center" sx={{ backgroundColor: "#bbbbbb", color: "black", p: 3 }}>
                        <Typography variant="body1" gutterBottom>Gracias por comprar en nuestra tienda</Typography>
                    </Grid>
                    <Divider sx={{ background: "black" }} />    
                    <CardActions>
                        <Button variant="contained">Descargar</Button>
                    </CardActions>

                </Card>
            </Container>

        </Grid>
    </>
}
export default Bill;