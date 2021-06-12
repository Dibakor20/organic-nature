import React from 'react';
import {useStyles} from '../Slider/SliderStyles'
import {Box, Grid, Paper, Typography,Button, Container} from '@material-ui/core';
import InfiniteCarousel from 'react-leaf-carousel';


const Slider = () => {
    const classes = useStyles();
    
    return (
        <>
            <Box className={classes.SliderSection}>
            <Container maxWidth='xl'>
            <Box className={classes.SliderContent}>
             <Typography className={classes.SliderTitle}>
             Proudly presented by
             </Typography>
             <Typography className={classes.SliderDescription}>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.
             </Typography>
            </Box>
                
            
            </Container>   
            </Box>   
        </>
    );
};

export default Slider;