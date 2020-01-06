import React, { useEffect, useState } from 'react';
import { Grid, Container, IconButton, Typography, Paper, ListItem, ListItemText, List, Grow } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons';
import rootStyles from '../utils/styles';

const Education = props => {

    // setup styling
    const classes = rootStyles();
    // state for animations
    const [content, setContent] = useState(false);
    // educations array
    const educations = [
        {
            title: "AWS Solutions Architect Certification",
            date: "DEC 2019 - CURRENT",
            items: [
                "I am currently studying to take the AWS Solutions Architect Certification",
            ]
        },
        {
            title: "University of the Shire, Middle Earth - BSc Computer Information Systems",
            date: "JAN 2015 - APR 2018",
            items: [
                "Undergraduate completed with a G.P.A. of 3.58.",
                "I have a passion for learning, and constantly working to improve my technical skills.",
            ]
        },

    ];
    // on mount do:
    useEffect(() => {
        setContent(true);
    }, []);

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h1">Education</Typography>
                {
                    educations.map(row => (
                        <Grow in={content} timeout={1000} mountOnEnter unmountOnExit>
                            <Paper className={classes.contentPadding}>
                                <Grid container>
                                    <Grid item xs={4}>
                                        <Typography variant="h6">{row.title}</Typography>
                                        <Typography variant="subtitle1">{row.date}</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <List>
                                            {
                                                row.items.map(row => (
                                                    <ListItem>
                                                        <IconButton>
                                                            <CheckCircle className={classes.bullet} />
                                                        </IconButton>
                                                        <ListItemText primary={row} />
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grow>
                    ))
                }
                <div className={classes.marginFoot} />
            </Container>
        </React.Fragment>
    );
}

export default Education;