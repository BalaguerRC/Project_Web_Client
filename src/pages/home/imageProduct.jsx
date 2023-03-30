import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from "@mui/material";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info"

const ImageProduct = () => {
    const getToken = localStorage.getItem("Token");
    const [image, setImage] = useState([]);
    const GetProduct = async () => {
        await fetch("http://localhost:5081/api/Products", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => setImage(data))
    }

    //console.log(image)
    useEffect(() => {
        GetProduct();
    }, [])
    return (
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
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}


export default ImageProduct;

export const CategoryId1 = () => {
    const getToken = localStorage.getItem("Token");
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState(null)
    const GetProduct = async () => {
        await fetch("http://localhost:5081/api/ProductsById/1", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setImage(data.data)
            setCategory(data.category)
        })
    }

    //console.log(image)
    useEffect(() => {
        GetProduct();
    }, [])
    return (
        <ImageList sx={{ width: "auto", maxWidth: 500, minWidth: 200, height: 300 }} cols={2}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">{category}</ListSubheader>
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
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export const CategoryId2 = () => {
    const getToken = localStorage.getItem("Token");
    const [image, setImage] = useState([]);
    const [category, setCategory] = useState(null)
    const GetProduct = async () => {
        await fetch("http://localhost:5081/api/ProductsById/2", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + getToken
            }
        }).then(resp => resp.json()).then(data => {
            setImage(data.data)
            setCategory(data.category)
        })
    }

    //console.log(image)
    useEffect(() => {
        GetProduct();
    }, [])
    return (
        <ImageList sx={{ width: "auto", maxWidth: 500, minWidth: 200, height: 300 }}>
            <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div">{category}</ListSubheader>
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
                            >
                                <InfoIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}