import { Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info"
import { useNavigate } from "react-router-dom";

const ListProductCategory = () => {
    const getToken = localStorage.getItem("Token");
    const [image, setImage] = useState([]);

    const [image1, setImage1] = useState([]);
    const [category1, setCategory1] = useState(null)

    const [image2, setImage2] = useState([]);
    const [category2, setCategory2] = useState(null)

    const GetProduct = async () => {
        await fetch(import.meta.env.VITE_URL + "/Products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => setImage(data))

        await fetch(import.meta.env.VITE_URL + "/ProductsById/1", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setImage1(data.data)
            setCategory1(data.category)
        })

        await fetch(import.meta.env.VITE_URL + "/ProductsById/10006", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setImage2(data.data)
            setCategory2(data.category)
        })
    }

    useEffect(() => {
        GetProduct();
    }, [])

    const navigate = useNavigate();

    return <>
        <Box sx={{ backgroundColor: "#265c66", flexGrow: 1 }}>
            <Box sx={{ justifyContent: "center", alignItems: "center", p: 7, margin: "auto", maxWidth: 1100, }}>

                <Grid container spacing={5}>
                    <Grid item marginRight={1.8}>
                        <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
                            <Typography variant="h4" gutterBottom>Productos</Typography>
                            <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs sm container>
                        {/**content */}
                        <ImageList sx={{ width: "auto", maxWidth: 500, minWidth: 200, height: 400 }} cols={2}>
                            <ImageListItem key="Subheader" cols={2}>
                                <ListSubheader component="div">Products</ListSubheader>
                            </ImageListItem>
                            {image && image.map((item) => (
                                <ImageListItem key={item.id}>
                                    <img
                                        src={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.name}
                                        subtitle={item.author}
                                        actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.name}`}
                                                onClick={() => navigate("/products/details/" + item.id)}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                        }
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>

                    </Grid>
                </Grid>
            </Box >
        </Box >

        <Box sx={{ justifyContent: "center", alignItems: "center", p: 7, margin: "auto", maxWidth: 1100, flexGrow: 1, }}>

            <Grid container spacing={5}>
                <Grid item marginRight={1.8}>
                    <Box sx={{ maxWidth: 488, maxHeight: 328, paddingTop: 2 }}>
                        <Typography variant="h4" gutterBottom>Categoria</Typography>
                        <Typography variant="subtitle1" gutterBottom>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</Typography>
                    </Box>
                </Grid>
                <Grid item xs sm container>

                    {/**content */}
                    {image1 ==null ? null: (
                        <Grid item xs container direction="column">
                        <Grid item xs>
                            <ImageList sx={{ width: "auto", maxWidth: 500, minWidth: 200, height: 300 }} cols={2}>
                                <ImageListItem key="Subheader" cols={2}>
                                    <ListSubheader component="div">{category1}</ListSubheader>
                                </ImageListItem>
                                {image1 && image1.map((item) => (
                                    <ImageListItem key={item.id}>
                                        <img
                                            src={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format`}
                                            srcSet={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            alt={item.name}
                                            loading="lazy"
                                        />
                                        <ImageListItemBar
                                            title={item.name}
                                            subtitle={item.author}
                                            actionIcon={
                                                <IconButton
                                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                    aria-label={`info about ${item.name}`}
                                                    onClick={() => navigate("/products/details/" + item.id)}
                                                >
                                                    <InfoIcon />
                                                </IconButton>
                                            }
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                    </Grid>
                    )}

                    

                    {/**#2 */}
                    {
                        image2 == null ? null :
                            (
                                <Grid item xs container direction="column">
                                    <Grid item xs>
                                        <ImageList sx={{ width: "auto", maxWidth: 500, minWidth: 200, height: 300 }}>
                                            <ImageListItem key="Subheader" cols={2}>
                                                <ListSubheader component="div">{category2}</ListSubheader>
                                            </ImageListItem>
                                            {image2 && image2.map((item) => (
                                                <ImageListItem key={item.id}>
                                                    <img
                                                        src={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format`}
                                                        srcSet={`${item.image == null ? "/src/assets/signo.png" : item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                        alt={item.name}
                                                        loading="lazy"
                                                    />
                                                    <ImageListItemBar
                                                        title={item.name}
                                                        subtitle={item.author}
                                                        actionIcon={
                                                            <IconButton
                                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                                aria-label={`info about ${item.name}`}
                                                                onClick={() => navigate("/products/details/" + item.id)}
                                                            >
                                                                <InfoIcon />
                                                            </IconButton>
                                                        }
                                                    />
                                                </ImageListItem>
                                            ))}
                                        </ImageList>
                                    </Grid>
                                </Grid>
                            )
                    }

                </Grid>
            </Grid>
        </Box >
    </>
}

export default ListProductCategory;