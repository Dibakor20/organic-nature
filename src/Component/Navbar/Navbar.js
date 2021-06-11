import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Hidden, }from '@material-ui/core';
import { useStyles } from '../Header/HeaderStyles';
import logo from '../../images/Group 220.png'
import MenuIcon from '@material-ui/icons/Menu';

const navLinks = [
    { id: "Home", label: "Home" },
    { id: "Products", label: "Products" },
    { id: "Blog", label: "Blog" },
    { id: "About", label: "About Us" },
    { id: "Contact", label: "Contact" },
  ];

const Navbar = () => {
    const classes = useStyles()
    return (
        <>
           <AppBar position="static" className={classes.Navbar}>
            <Toolbar className={classes.Toolbar}>
                <Typography className={classes.Organic} >
                <img src={logo} alt="logo" className={classes.logo} />
                ORGANIC
                </Typography>
                <Box component={Hidden} xsDown>
                    <Box>
                {navLinks.map((item, i) => (
               <Button className={classes.NavLinks}>
                {item.label}
              </Button>
            ))} </Box>
                </Box>

                <Box component={Hidden} smUp>
                    <IconButton>
                       <MenuIcon/>
                    </IconButton>
                </Box>
                
            </Toolbar>
            </AppBar> 
        </>
    );
};

export default Navbar;