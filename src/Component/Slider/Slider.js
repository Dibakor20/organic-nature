import React from 'react';
import { useStyles } from '../Slider/SliderStyles'
import { Box, Grid, Paper, Typography, Button, Container } from '@material-ui/core';
import InfiniteCarousel from 'react-leaf-carousel';
import sliderImage1 from '../../images/Group 39.png';
import sliderImage2 from '../../images/Group 64.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
// import "./styles.css";
import SwiperCore, {
    Pagination
} from 'swiper/core';
SwiperCore.use([Pagination]);


const sliderImage = [
    { image: sliderImage1 },
    { image: sliderImage2 },
    { image: sliderImage1 },
    { image: sliderImage2 },
    { image: sliderImage1 },
    { image: sliderImage1 },
    { image: sliderImage1 },
    { image: sliderImage1 },

]



const Slider = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.SliderSection}>
                <Container>
                    <Box className={classes.Slider_Top}>
                        <Typography className={classes.Slider_Title}>
                            Proudly presented by
                        </Typography>
                        <Typography className={classes.Slider_Description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>

                    <div>

                        <Swiper slidesPerView={5} spaceBetween={30} freeMode={true} pagination={{
                            "clickable": true
                        }} className={classes.Slider_Container} >
                            {
                                sliderImage.map(image => <SwiperSlide className={classes.Slider_Content}><img src={image.image} alt="" /></SwiperSlide>)
                            }



                        </Swiper>





                    </div>




                </Container>
            </div>
        </>
    );
};

export default Slider;