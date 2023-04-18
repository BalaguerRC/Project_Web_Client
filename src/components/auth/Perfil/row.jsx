import {
  Box,
  Button,
  Collapse,
  IconButton,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Row = ({ item, price, date }) => {
  const [history, setHistory] = useState(false);
  const [open, setOpen] = useState(false);
  const [TotalPri, setTotalPri] = useState(0);
  const getToken = localStorage.getItem("Token");

  let lista3 = [];

  const response = () => {
    fetch(import.meta.env.VITE_URL + "/CompraClient/" + item, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((resp) => resp.json())
      .then((data) => setHistory(data.data))
      .catch((err) => console.log(err));
    fetch(import.meta.env.VITE_URL + "/Report/" + item, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + getToken,
      },
    })
      .then((res) => res.json())
      .then((data) => setTotalPri(data.data))
      .catch((err) => console.log(err));
  };

  if (open) {
    response();
  }

  const navigate = useNavigate();

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "-" : "+"}
          </IconButton>
        </TableCell>
        <TableCell>{item}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>{date.slice(0, 10)}</TableCell>
        <TableCell>{date.slice(11, 16)}</TableCell>
        <TableCell>
          <Link
            underline="hover"
            component={"button"}
            onClick={() => navigate("/bills/" + item)}
          >
            Ver Factura
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Productos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead sx={{ backgroundColor: "background.paper" }}>
                  <TableRow>
                    <TableCell>Codigo</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio ($)</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {history &&
                    history.map((item) => {
                      //lista3.push(item.total_price)
                      return (
                        <TableRow key={item.id_product}>
                          <TableCell>{item.id_product}</TableCell>
                          <TableCell>{item.productName}</TableCell>
                          <TableCell>{item.amount}</TableCell>
                          <TableCell>{item.price}</TableCell>
                          <TableCell align="right">
                            {item.total_price}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Row;
