import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/Group 134.png'

export const useStyles = makeStyles((theme) => ({
    testimonialSection: {
        background: `url('${Image}') no-repeat`,
        backgroundPosition: '-600px',
        height: '1000px'


    },

    review_slide_card_wrapper: {
        margin: " 100px 0"
    },

    review_slide_card_container: {

        textAlign: 'center'
    },
    review_card_imgOne: {
        padding: '0px 0px 10px 0px',
        display: 'block',
        margin: '0px auto',
    },
    review_card_reviewer: {
        display: 'block',
        margin: '0px auto',
        width: '200px',
        height: '200px',
        borderRadius: '50%'

    },
    review_card_name: {
        fontSize: "26px",
        color: '#374b5c'
    },
    review_card_des: {
        fontSize: "16px",
        color: '#374b5c',
        padding:'0 20%'
    },
    ContactContent: {
        margin: "60px 0px"
    },
    ContactTitle: {
        textAlign: "center",
        fontSize: "36px",
        color: "#374b5c",
    },
    ContactDescription: {
        textAlign: "center",
        fontSize: "16px",
        color: "#374b5c",
    },
    news_letter: {
        display: "block",
        margin: "0px auto"
    },
    Contact_Button: {
        color: "#fff",
        background: "#00dbd0",
        borderRadius: "30px",
        margin: "15px 0px"
    },


}))