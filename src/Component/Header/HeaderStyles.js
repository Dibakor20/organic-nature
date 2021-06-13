import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    HeaderWrapper: {
        width: "100%",
        background: "#f1fefe",
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
        display: 'flex',
        alignItems: 'center',
        fontSize: "42px",
        color: "#374b5c",
        fontWeight: "bold",
        fontFamily: "LibreBaskerville",
    },


    Header_Container: {
        flexGrow: 1,
        height: "90vh",

    },

    Header_Subtitle: {
        fontSize: "36px",
        color: "#374b5c",
    },
    Header_title: {
        fontSize: "56px",
        color: "#374b5c",
        fontWeight: "bold",
        fontFamily: "LibreBaskerville",
    },
    Header_Description: {
        fontSize: "22px",
        color: "#374b5c",
    },
    Banner_Button: {
        color: "#fff",
        background: "#00dbd0",
        padding: "10px 30px",
        borderRadius: "10px",
        margin: "20px 0px"
    },
    Banner_Img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '150px',
        padding: "40px",
        width: "140px",
        border: "solid 3px #00dbd0"
    },
    Banner_LastImg: {
        width: "300px",
        height: "470px",
        position: 'absolute',
        top: '40%',
        left: '50%'

    }

}))