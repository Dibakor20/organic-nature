import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    Blog: {
        display: "block",
        margin: "60px auto"
    },
    BlogLogo: {
        display: "block",
        margin: "20px auto"
    },
    BlogTitle: {
        textAlign: "center",
        fontSize: "36px",
        color: "#374b5c",
    },
    BlogDescription: {
        textAlign: "center",
        fontSize: "16px",
        color: "#374b5c",
    },
  
}))