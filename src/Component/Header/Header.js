import React, { useState } from 'react';
import {Box, Grid, Paper, Typography,Button} from '@material-ui/core'
import {useStyles} from '../Header/HeaderStyles'
import Navbar from '../Navbar/Navbar'
import bannerImg from '../../images/Group 220.png'
import bannerLastImg from '../../images/Group 195.png'

const Header = () => {
    const classes = useStyles()
    
      //for drawer .
      const [initialState, setInitialState] = useState(false);
      const handleDrawerOpen = () => {
        setInitialState(!initialState);
      };

    return (
        <>
         <Box className={classes.HeaderWraper} id='header'>
            <Navbar/>
            <Box className={classes.HeaderContainer}>
            <Grid container >
            <Grid item sm={12} md={6} lg={6}> 
            <Typography className={classes.Healthy} > 
              Healthy life with
            </Typography>
            <Typography className={classes.Nature} > 
             Nature Organic
            </Typography>
            <Typography className={classes.Vegetable} > 
            Vegetables are the edible parts of a plant <br/> that is used in cooking or can be eaten now.
            </Typography>
            <Button className={classes.BannerButton}>
             Explore Now
            </Button>
            </Grid>
            <Grid item sm={12} md={7} lg={6}>
            <Box >
                <img
                  src={bannerImg}
                  alt={"bannerImg"}
                  className={classes.BannerImg}
                />
              </Box>
              <Box >
                <img
                  src={bannerLastImg}
                  alt={"bannerLastImg"}
                  className={classes.BannerLastImg}
                />
              </Box>     
            </Grid>   
            </Grid>
            </Box>
         </Box>
        </>
    );
};

export default Header;
