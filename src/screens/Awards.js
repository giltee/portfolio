import React, { useEffect, useState } from 'react';
import { Grid, IconButton, Typography, Paper, ListItem, ListItemText, List, Grow, Container } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons';
import rootStyles from '../utils/styles';

const Awards = props => {

    // styles 
    const classes = rootStyles();
    // state animations
    const [content, setContent] = useState(false);

    const awards = [


        {
            title: "CIS Graduate Dean’s List (2018)",
            date: "2018",
            items: [
                "Achieved the honourable recognition of the University Dean’s list. The minimum requirements for a semester are 15 credits and a GPA of 3.50.",
            ]
        },
        {
            title: "Fall Semester Dean’s List",
            date: "2017",
            items: [
                "Achieved the honourable recognition of the University Dean’s list. The minimum requirements for a semester are 15 credits and a GPA of 3.50.",
            ]
        },
        {
            title: "Hackathon Winner (2017)",
            date: "2017",
            items: [
                "During the course of 24 hours, our team developed a business product idea and implemented a prototype of the application.",
                "After the 24 hours were completed, our team presented our finished prototype to a panel of community judges.",
            ]
        },
        {
            title: "CCNA Routing and Switching: Introduction to Networks (2015)",
            date: "2015",
            items: [
                "The CCNA Routing and Switching curriculum is a gateway to entry-level networking jobs and IT careers.",
            ]
        },
        {
            title: "Fall Semester Dean’s List (2015)",
            date: " 2015",
            items: [
                "Achieved the honorable recognition of the University Dean’s list. The minimum requirements for a semester are 15 credits and a GPA of 3.50.",
            ]
        },


    ]
    // on mount do:
    useEffect(() => {
        setContent(true);
    }, [])

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h1">Awards</Typography>
                {
                    awards.map(row => (
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
            </Container>
        </React.Fragment>
    );
}

export default Awards;