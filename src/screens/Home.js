import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Slide, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop: 100,
    },
    space: {
        marginTop: 25,
    },
    container: {
        height: "100vh"
    }

})

const Home = props => {
    // set up styles
    const classes = useStyles();
    // state variables for animations
    const [first, setFirst] = useState(false);
    const [last, setLast] = useState(false);
    // on mount do: 
    useEffect(() => {
        // invoke transitions
        setFirst(true);
        setLast(true);
    }, [])

    return (
        <React.Fragment>
            <Container className={classes.container}>
                <Grid container className={classes.root}>
                    <Grid item xs={12}>
                        <Slide direction="left" in={first} timeout={1000} mountOnEnter unmountOnExit>
                            <Typography variant="h2">Jon Doe</Typography>
                        </Slide>
                    </Grid>
                    <Grid item xs={12} className={classes.space} >
                        <Slide direction="right" in={first} timeout={1000} mountOnEnter unmountOnExit>
                            <Typography variant="h4">Full Stack Developer</Typography>
                        </Slide>
                    </Grid>
                    <Zoom in={last} timeout={1500} mountOnEnter unmountOnExit>
                        <Grid item xs={12} className={classes.space}>
                            <Typography variant="body1" display="inline">999-999-9999</Typography>
                            <Typography variant="body1" display="inline"> | jon.doe@gmail.com</Typography>
                        </Grid>
                    </Zoom>
                </Grid>
            </Container>
        </React.Fragment>
    );
}


export default Home;