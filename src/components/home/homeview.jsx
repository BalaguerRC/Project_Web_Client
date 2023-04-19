import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import ListProductCategory from "./listProductCategory";
import homeimg from "../../assets/homeimg2.png";
import { useNavigate } from "react-router-dom";

const ButtonCustom = styled(Button)({
  fontWeight: 550,
  padding: "6px 12px",
  backgroundColor: "#661AE6",
  color: "white",
  "&:hover": {
    backgroundColor: "#8146eb",
    borderColor: "#8146eb",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#8146eb",
    borderColor: "#8146eb",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem #661AE6",
  },
});
const HomeView = () => {
  const navigate = useNavigate();
  //242933
  return (
    <div>
      <div style={{ width: "100%", height: "auto" }}>
        <Box
          sx={{
            alignItems: "center",
            display: "grid",
            backgroundPosition: "top",
            backgroundImage: `url(${homeimg})`,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            justifyContent: "center",
          }}
        >
          <Grid container marginTop={90} marginBottom={10} textAlign={"center"}>
            <Container fixed>
              <ButtonCustom
                variant="contained"
                onClick={() => navigate("products")}
              >
                Products
              </ButtonCustom>
            </Container>
          </Grid>
        </Box>
      </div>
      <Divider sx={{ background: "#1d212c", height: 10 }}></Divider>
      <ListProductCategory />
    </div>
  );
};

export default HomeView;
