import React from 'react';
import { useStyles } from './EventStyles';
import { Box, Button, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardActions,CardContent, Paper } from "@material-ui/core";

const Event = ({blog}) => {
    const {image, title, description} = blog;
    console.log(image)
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
            <CardActionArea>
            <img src={image} alt="logo" className={classes.logo} />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                </CardContent>
                <Button variant="outlined" color="primary">
                 Read More
                </Button>
            </CardActionArea>
            </Card>
        </>
    );
};

export default Event;