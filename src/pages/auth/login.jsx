import { Box, Button, Card, Grid, TextField, Typography, OutlinedInput } from "@mui/material";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    //const email=useRef(0);
    //const password=useRef(0);

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);


    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangePassword = (e) => setPassword(e.target.value)

    const navigate = useNavigate();

    const Loged = async () => {
        //console.log(email, password)
        await fetch('http://localhost:5081/api/Users/login', {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
                /*,
                "Authorization": ``*/
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            //console.log(data.succes)

            if (data.succes === false) {
                setError("Invalid email or password");
            }
            else {
                localStorage.setItem("Token", data.token);
                localStorage.setItem("DATA", JSON.stringify(data.data));
                setError(null);
                const getToken = localStorage.getItem("Token");
                if (getToken != null) {
                    navigate("/");
                }
                //navigate("perfil");
            }
        }).catch(err => {
            console.log(err);
            setError("Error fetch");
        })
    }
    return <>
        <Grid container
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"30%"}
            p={2}>

            <Card variant="outlined">
                <Grid container direction={"column"} alignItems="center" sx={{
                    width: 500,
                    maxWidth: '100%',
                    p: 5,
                }}>
                    <Typography variant="button" component={"h3"}>
                        Login
                    </Typography>
                    <TextField
                        margin="normal"
                        onChange={onChangeEmail}
                        required
                        id="outlined-required"
                        label="Email"
                        fullWidth
                    />
                    <TextField
                        onChange={onChangePassword}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        fullWidth
                        margin="normal"
                    />
                    <Button sx={{ marginTop: 3 }} variant="contained" onClick={Loged}>Login</Button>
                </Grid>
            </Card>
        </Grid >
    </>
}
export default Login;