import React from 'react';
import { useStyles } from './BlogStyles';
import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions, CardContent, Paper } from "@material-ui/core";
import BlogLogo from '../../images/Group 114.png'
import Blog1 from '../../images/blog2.png'
import Blog2 from '../../images/blog3.png'
import Blog3 from '../../images/blog4.png'
import Event from './Event';

const blogPost = [
    {
        image: Blog1,
        title: "Blog Post One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: Blog2,
        title: "Blog Post One",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        image: Blog3,
        title: "Blog Post One",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]

const Blog = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.BlogSection}>
                <Container>
                    <Box className={classes.Blog}>
                        <Typography>
                            <img src={BlogLogo} alt="Bloglogo" className={classes.BlogLogo} />
                        </Typography>
                        <Typography className={classes.BlogTitle}>
                            Read Our Blog
                        </Typography>
                        <Typography className={classes.BlogDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                    <Grid container spacing={3}  >

                      


                        {
                            blogPost.map(blog => <Grid item xs={12} sm={4} className={classes.post}><Event blog={blog}></Event></Grid>)
                        }



                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Blog;