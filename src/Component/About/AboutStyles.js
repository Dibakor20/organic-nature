import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    About: {
        display: "block",
        margin: "60px auto"
    },
    AboutLogo: {
        display: "block",
        margin: "20px auto"
    },
    AboutTitle: {
        textAlign: "center",
        fontSize: "36px",
        color: "#374b5c",
    },
    AboutDescription: {
        textAlign: "center",
        fontSize: "16px",
        color: "#374b5c",
    }
}))