import React from 'react';
import { useStyles } from './TestimonialsStyles'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import pictureReview from '../../images/review.png'
import dotPic from '../../images/Group 86.png';
import { Box, Grid, Paper, Typography, Button, Container, TextField } from '@material-ui/core';

import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);

const reviewData = [
    { name: 'Jane Doe', image: pictureReview },
    { name: 'Jane Doe', image: pictureReview },
    { name: 'Jane Doe', image: pictureReview },
    { name: 'Jane Doe', image: pictureReview },
    { name: 'Jane Doe', image: pictureReview },
]

const Testimonials = () => {
    const classes = useStyles();




    return (
        <div className={classes.testimonialSection}>


            <Swiper spaceBetween={30} pagination={{
                "clickable": true
            }}>

                {
                    reviewData.map(data =>
                        <SwiperSlide className={classes.review_slide_card_wrapper} >
                            <div className={classes.review_slide_card_container}>
                                <img className={classes.review_card_imgOne} src={dotPic} alt="" />
                                <img className={classes.review_card_reviewer} src={data.image} alt="" />
                                <Typography className={classes.review_card_name}>
                                    {data.name}
                                </Typography>
                                <Typography className={classes.review_card_des} >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, est. Consectetur quisquam temporibus molestiae, libero, beatae ullam maiores necessitatibus asperiores quidem mollitia, culpa eligendi! Sed error porro et similique voluptatum.
                                </Typography>

                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>



            <Box className={classes.ContactSection}>
                <Container maxWidth='xl'>
                    <Box className={classes.ContactContent}>
                        <Typography className={classes.ContactTitle}>
                            Subscribe to Our Newsletter
                        </Typography>
                        <Typography className={classes.ContactDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                    <Box className={classes.ContactDescription}>
                        <TextField id="standard-basic" label="Enter Your Email Adress" />
                        <Button className={classes.Contact_Button}>
                            Subscribe
                        </Button>
                    </Box>
                </Container>
            </Box>







        </div>
    );
};

export default Testimonials;