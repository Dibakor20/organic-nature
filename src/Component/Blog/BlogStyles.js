import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    Blog: {
        display: "block",
        margin: "60px auto"
    },
    Blog_Logo: {
        display: "block",
        margin: "20px auto"
    },
    Blog_Title: {
        textAlign: "center",
        fontSize: "36px",
        color: "#374b5c",
    },
    Blog_Description: {
        textAlign: "center",
        fontSize: "16px",
        color: "#374b5c",
    },
  
}))