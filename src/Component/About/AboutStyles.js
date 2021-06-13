import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    About: {
        display: "block",
        margin: "60px auto"
    },
    About_Logo: {
        display: "block",
        margin: "20px auto"
    },
    About_Title: {
        textAlign: "center",
        fontSize: "36px",
        color: "#374b5c",
    },
    About_Description: {
        textAlign: "center",
        fontSize: "16px",
        color: "#374b5c",
    }
}))