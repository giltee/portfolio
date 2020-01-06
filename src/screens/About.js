import React, { useEffect, useState } from 'react';
import { Fade, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    mainImg: {
        height: '80vh',
        width: '100%',
        backgroundImage: `url("./img/about.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    space: {
        marginBottom: 30
    },
    text: {
        padding: 20,
    }

}));

const About = props => {
    const classes = useStyles();
    // state variables for animations
    const [img, setImg] = useState(false);

    useEffect(() => {
        setImg(true);
    })
    return (
        <React.Fragment>

            <Grid container spacing={3}>
                <Grid xs={12} className={classes.space}>
                    <Fade in={img} timeout={1000}>
                        <div className={classes.mainImg} />
                    </Fade>
                </Grid>
                <Grid xs={12} md={4}>
                    <Typography variant="h3">About</Typography>
                </Grid>
                <Grid xs={12} md={8} className={classes.space}>
                    <Typography className={classes.text} variant="body1" align="left">
                        I am Jon Doe, thank you for taking the time to view my portfolio. I am a full stack developer residing in the Shire, Middle Earth. I specialize in developing single-page applications using modern Javascript frameworks such as React JS, Angular JS, and Loopback IO. In addition to a love for writing code, I also have a strong understanding of Unix based systems and the requirements to deploy them from a Dev-Ops standpoint. When I am not coding away at home, I enjoy getting out to the great outdoors to fish and hike.
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default About;