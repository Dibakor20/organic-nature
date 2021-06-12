import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@material-ui/core'
import { useStyles } from '../Header/HeaderStyles'
import { Container } from '@material-ui/core';
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
      <Box className={classes.HeaderWrapper} id='header'>
        <Container>
            <Grid className={classes.Header_Container} container direction="row" justify="center" alignItems="center">
              <Grid className={classes.Header_Left} item xs={12} sm={6}>
                <Typography className={classes.Healthy} >
                  Healthy life with
                </Typography>
                <Typography className={classes.Nature} >
                  Nature Organic
                </Typography>
                <Typography className={classes.Vegetable} >
                  Vegetables are the edible parts of a plant <br /> that is used in cooking or can be eaten now.
                </Typography>
                <Button className={classes.BannerButton}>
                  Explore Now
                </Button>
              </Grid>
              <Grid className={classes.Header_Right} item xs={12} sm={6}>
                <img
                  src={bannerImg}
                  alt={"bannerImg"}
                  className={classes.BannerImg}
                />
                <img
                  src={bannerLastImg}
                  alt={"bannerLastImg"}
                  className={classes.BannerLastImg}
                />
              </Grid>
            </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;