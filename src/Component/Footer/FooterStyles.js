import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/Group 229.png'



export const useStyles = makeStyles((theme) => ({
    Footer: {
        marginTop: "120px",
        background: `url('${Image}') no-repeat`,
    },
    Footer_container:{
        padding:'50px 0px 0px 0px'
        
    },

    footer_Description: {
        fontSize: "14px",
        margin: "10px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville"
    },
    footer_Copyright: {
        marginTop: "40px",
        fontSize: "14px",
        margin: "10px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville",
        fontWeight: "bold"
    },
    footer_Title: {
        fontSize: "16px",
        margin: "20px 0px",
        color: "#fff",
        fontFamily: "LibreBaskerville",
        fontWeight: "bold"
    },
    linkedin: {
        margin: "0px 20px"
    },
    Box_Product: {
        marginTop: "60px"
    }

}))