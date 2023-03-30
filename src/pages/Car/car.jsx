import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, List, ListItem, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Carrito = []

const Car = () => {

    //console.log(Carrito)

    const [carrito2, setCarrito] = useState([])

    const getCarrito = JSON.parse(localStorage.getItem("Carrito"))

    //console.log(getCarrito)

    const response = () => {
        setCarrito(getCarrito)
        console.log(carrito2)
    }

    useEffect(() => {
        response()
        //console.log("Carrito :"+carrito2)
    }, [])


    return <>
        <Grid>
            Carrito
            <Box
                /*spacing={1}*/
                paddingTop={1}
                justifyContent="center"

                    /*spacing={2}*/>
                <Grid container item spacing={5}>
                    {carrito2 && carrito2.map((item, value) => {
                        return <Grid item xs={6} md={3} key={item.id}>
                            <Card sx={{ maxWidth: 345, minWidth: 100 }}>
                                <CardActionArea>
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
        </Grid>
    </>
}

export default Car;

export const AddCar = (data) => {
    //const newData= {}
    Carrito.push(data)
    //console.log(Carrito)
    localStorage.setItem("Carrito", JSON.stringify(Carrito))
}