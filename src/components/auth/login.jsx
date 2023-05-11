import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Grid,
  TextField,
  Typography,
  OutlinedInput,
  Link,
  Divider,
  Paper,
} from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "./style/Buttom";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setError(null);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setError(null);
  };

  const navigate = useNavigate();

  const Loged = async () => {
    //console.log(email, password)
    setLoading(!Loading);
    if (!email && !password) {
      setTimeout(() => {
        setLoading(false);
        setError("Debe llenar todos los campos");
        console.log("test");
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        fetch(import.meta.url.env.VITE_URL+"/Users/login", {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
            /*,
                        "Authorization": ``*/
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            //console.log(data.succes)

            if (data.succes === false) {
              setError("Invalid email or password");
            } else {
              localStorage.setItem("Token", data.token);
              localStorage.setItem("DATA", JSON.stringify(data.data));
              setError(null);
              const getToken = localStorage.getItem("Token");
              if (getToken != null) {
                navigate("/");
              }
              //navigate("perfil");
            }
          })
          .catch((err) => {
            console.log(err);
            setError("Error fetch");
          });
      }, 2000);
    }
  };
  return (
    <>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        position={"absolute"}
        top={"30%"}
        p={2}
      >
        <Card
          variant="outlined"
          sx={{
            borderColor: "9C9C9C",
            borderTopWidth: 5,
            background: "#242933",
            boxShadow: "3px 5px 28px #000000",
          }}
        >
          <Grid
            container
            direction={"column"}
            alignItems="center"
            sx={{
              width: 500,
              maxWidth: "100%",
              p: 5,
            }}
          >
            <Typography variant="button" component={"h3"} fontSize={20}>
              Login
            </Typography>
            <Grid container>
              <Link
                component={"button"}
                underline="hover"
                onClick={() => navigate("/")}
              >
                <Typography variant="button" color={"text.secondary"}>
                  {"<-Home"}
                </Typography>
              </Link>
            </Grid>
            <TextField
              margin="normal"
              onChange={onChangeEmail}
              required
              id="outlined-required"
              label="Email"
              type="email"
              fullWidth
            />
            <TextField
              onChange={onChangePassword}
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              fullWidth
              margin="normal"
            />
            {error ? (
              <Typography variant="caption" color={"red"}>
                {error}
              </Typography>
            ) : null}
            <Grid container mr={"auto"}>
              <Link href="#" variant="body2" color="text.secondary">
                Olvido su contraseña?
              </Link>
            </Grid>
            <Divider />
            {Loading ? (
              <LoadingButton
                loading
                variant="outlined"
                sx={{ marginTop: 3, width: "100%" }}
              >
                Login
              </LoadingButton>
            ) : (
              <ButtonCustom
                sx={{ marginTop: 3, width: "100%" }}
                variant="contained"
                onClick={Loged}
              >
                Login
              </ButtonCustom>
            )}
          </Grid>
        </Card>
      </Grid>
    </>
  );
};
export default Login;
