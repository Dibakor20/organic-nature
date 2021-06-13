import React from 'react';
import { useStyles } from './FooterStyles';
import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions, CardContent, Paper } from "@material-ui/core";
import Footerlogo from '../../images/Group 225.png'
import facebook from '../../images/Group 99.png'
import linkedin from '../../images/Group 100.png'
import instagram from '../../images/Group 105.png'



const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.Footer}>
                <Container maxWidth="lg">
                    <Grid className={classes.Footer_container} container spacing={5}>
                        <Grid item xs={12} sm={5}>
                            <Box >
                                <Typography className={classes.Organic} >
                                    <img src={Footerlogo} alt="logo" className={classes.logo} />
                                </Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br /> sed do eiusmod tempor</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Copyright}>© Copyright 2020 Nature</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Box >
                                <Typography className={classes.footer_Title}>Information</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>About Us</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>Products</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>Contact Us</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>Terms of Service</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={2}>

                            <Box className={classes.Box_Product}>
                                <Typography className={classes.footer_Description}>About Us</Typography>
                            </Box>
                            <Box>
                                <Typography className={classes.footer_Description}>Products</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={2}>
                            <Box >
                                <Typography className={classes.footer_Title}>Follow Us</Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    <img src={facebook} alt="logo" className={classes.facebok} />
                                    <img src={linkedin} alt="logo" className={classes.linkedin} />
                                    <img src={instagram} alt="logo" className={classes.instagram} />
                                </Typography>
                            </Box>

                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
