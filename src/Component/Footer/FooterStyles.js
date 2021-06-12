import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/Group 229.png'



export const useStyles = makeStyles((theme) => ({
    Footer: {
        marginTop: "120px",
        // backgroundImage: `url(${Image})`,
        height: "50vh",
        backgroundColor: "#374b5c"
    },
    footerDescription: {
        fontSize: "14px",
        margin: "10px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville"
    },
    footerCopyright: {
        marginTop: "40px",
        fontSize: "14px",
        margin: "10px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville",
        fontWeight: "bold"
    },
    footerTitle: {
        fontSize: "16px",
        margin: "20px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville",
        fontWeight: "bold"

    }
}))