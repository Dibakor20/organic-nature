import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@material-ui/core'
import { useStyles } from '../Header/HeaderStyles'
import { Container } from '@material-ui/core';
import Navbar from '../Navbar/Navbar'
import bannerImg from '../../images/Group 220.png'
import bannerLastImg from '../../images/Group 195.png'

const Header = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.HeaderWrapper} id='header'>
        <Container>
            <Grid className={classes.Header_Container} container direction="row" justify="center" alignItems="center">
              <Grid className={classes.Header_Left} item xs={12} sm={6}>
                <Typography className={classes.Header_Subtitle} >
                  Healthy life with
                </Typography>
                <Typography className={classes.Header_title} >
                  Nature Organic
                </Typography>
                <Typography className={classes.Header_Description} >
                  Vegetables are the edible parts of a plant <br /> that is used in cooking or can be eaten now.
                </Typography>
                <Button className={classes.Banner_Button}>
                  Explore Now
                </Button>
              </Grid>
              <Grid className={classes.Header_Right} item xs={12} sm={6}>
                <img
                  src={bannerImg}
                  alt={"bannerImg"}
                  className={classes.Banner_Img}
                />
                <img
                  src={bannerLastImg}
                  alt={"bannerLastImg"}
                  className={classes.Banner_LastImg}
                />
              </Grid>
            </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;