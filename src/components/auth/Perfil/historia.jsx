import { Divider, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const Historia = () => {
    return <>
        <Grid sx={{ p: 2 }}>
            <Typography variant="button" sx={{ fontSize: 22 }}>
                Historial
            </Typography>
            <Divider></Divider>

            <TableContainer>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>$ - Precio</TableCell>
                            <TableCell>Fecha</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Data.map((item)=>{
                            return <TableRow key={item.Id}>
                                <TableCell>{item.Id}</TableCell>
                                <TableCell>{item.Name}</TableCell>
                                <TableCell>{item.Precio}</TableCell>
                                <TableCell>{item.Fecha}</TableCell>
                            </TableRow>
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>
    </>
}

const Data=[
    {
        Id: 1,
        Name: "Cocacola",
        Precio: 100.00,
        Fecha: "2000-01-01"
    },
    {
        Id: 2,
        Name: "Pepsi",
        Precio: 130.00,
        Fecha: "2001-01-01"
    },
    {
        Id: 3,
        Name: "Kola-Real",
        Precio: 120.00,
        Fecha: "2002-01-01"
    },
    {
        Id: 4,
        Name: "Chubby",
        Precio: 90.00,
        Fecha: "2003-01-01"
    }
]

export default Historia;