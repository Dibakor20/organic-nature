import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    HeaderWraper: {
        width: "100%",
        height: "90vh",
        background: "#f1fefe"
    },
    Navbar: {
        backgroundColor:"#f1fefe"
    },
    Toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    NavLinks: {
       fontFamily: "LibreBaskerville",
       fontSize: "16px",
       margin: "0px 20px "

    },
    Organic: {
        fontSize: "42px",
        color: "#374b5c",
        fontWeight: "bold",
        fontFamily: "LibreBaskerville",
    },
    Healthy: {
        fontSize: "36px",
        color: "#374b5c",
    },
    Nature: {
        fontSize: "56px",
        color: "#374b5c",
        fontWeight: "bold",
        fontFamily: "LibreBaskerville",
    },
    Vegetable: {
        fontSize: "22px",
        color: "#374b5c", 
    },
    BannerButton: {
        color: "#fff",
        background: "#00dbd0",
        padding: "10px 30px",
        borderRadius: "10px",
        margin: "20px 0px"
    },
    BannerImg: {
       padding: "20px 20px", 
       width: "140px",
       border: "solid 3px #00dbd0"
    },
    BannerLastImg: {
        width: "200px",
        height: "370px",
    }
}))