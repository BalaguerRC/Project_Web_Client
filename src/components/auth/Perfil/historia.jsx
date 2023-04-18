import {
  Box,
  Button,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Row from "./row";
/*import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';*/

const Historia = () => {
  const getData = JSON.parse(localStorage.getItem("DATA"));
  const getToken = localStorage.getItem("Token");
  const [historial, setHistorial] = useState([]);
  const [historialpr, setHistorialPr] = useState([]);

  let lista = [];
  let lista2 = [];
  let lista3 = [];

  const response = () => {
    fetch(import.meta.env.VITE_URL + "/Compra2/" + getData.id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHistorial(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log(err));
  };

  const test = () => {
    historial.forEach((element) => {
      if (!lista.includes(element.id_compra)) {
        lista.push(element.id_compra);
        lista2.push(element.date);
      }
    });
  };

  /*const fetchReport = (item) => {
    console.log(item);
    if (item != 0) {
      fetch(import.meta.env.VITE_URL + "/Report/" + item, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + getToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data);
          lista3.push(data.data);
        })
        .catch((err) => console.log(err));
    }
  };*/
  {
    historial != null ? test() : null;
  }

  useEffect(() => {
    response();
    //response2();
  }, []);

  const [open, setOpen] = useState(true);

  return (
    <>
      <Grid sx={{ p: 2 }}>
        <Typography variant="button" sx={{ fontSize: 22 }}>
          Historial
          <Button onClick={() => console.log(historialpr)}>Test</Button>
        </Typography>
        <Divider></Divider>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 378 }}>
            <Table>
              <TableHead sx={{ backgroundColor: "background.paper" }}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Codigo de factura</TableCell>
                  <TableCell>$ Precio Total</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Hora</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {lista &&
                  lista.map((item, index) => {
                    return (
                      <Row
                        item={item}
                        price={0}
                        date={lista2[index]}
                        key={index}
                      />
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  );
};

export default Historia;
