import React from 'react';
import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions,CardContent, Paper } from "@material-ui/core";
import {useStyles} from '../About/AboutStyles'
import AboutLogo from '../../images/Group 114.png'
import service1 from '../../images/Group 207.png'
import service2 from '../../images/Group 205.png'
import service3 from '../../images/Group 207.png'
import service4 from '../../images/Group 207.png'

const About = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.AboutSection}>
            <Container maxWidth='xl'>
            <Box className={classes.About}>
             <Typography>
             <img src={AboutLogo} alt="Aboutlogo" className={classes.About_Logo} />
             </Typography>
             <Typography className={classes.About_Title}>
              Welcome to Nature
             </Typography>
             <Typography className={classes.About_Description}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
             </Typography>
            </Box>

                <Box>
                <Grid container spacing={3}>
                <Grid item xs={3}>
                <img src={service1} alt="logo" className={classes.service1} />
                </Grid>
                <Grid item xs={3} >
                <img src={service2} alt="logo" className={classes.service2} />
                </Grid>
                <Grid item xs={3} >
                <img src={service3} alt="logo" className={classes.service3} />
                </Grid>
                <Grid item xs={3} >
                <img src={service4} alt="logo" className={classes.service4} />
                </Grid>
                </Grid>
                </Box>

            </Container>
            </Box>
        </>
    );
};

export default About;