import React, { useEffect, useState } from 'react';
import { Grid, IconButton, Typography, Container, Paper, ListItem, ListItemText, List, Grow } from '@material-ui/core'
import { CheckCircle } from '@material-ui/icons';
import rootStyles from '../utils/styles';

const Experience = props => {

    const [paper, setPaper] = useState(false);

    const classes = rootStyles();

    // experience array, pretty straight forward. Add your bullet points as an element of the items
    // array
    const experience = [
        {
            title: "Full Stack Developer - Gandalfs Graphics (Contract)",
            date: "NOV 2019 - CURRENT",
            items: [
                "Re - architected a poorly designed PHP application to modern web standards.",
                "Decreased page load times from 8 seconds to 2 seconds through implementing proper ajax calls.",
                "Added multiple features and fixed the existing bugs in the code left from the previous developer.",
                "Provided proper documentation for the code new and existing code base.",
                "Moved the code repository to git instead of using FTP to transfer files.",
            ]
        },
        {
            title: "JR Developer / JR System Administrator - Mithril inc.",
            date: "MAY 2018 - SEPT 2019",
            items: [
                "This was a hybrid role between a full stack developer and systems administrator. My main responsibilities included building hybrid mobile and web applications using a combination of frameworks and deployment techniques.",
                "I was responsible for all dev-ops and system administrator portions of my coding projects. This would include deploying my own VM’s (DNS, SSL, Puppet configuration, NGINX setup, Database configuration), setting up REST APIs and backend services, to building out my mobile and web clients.",
                "Deployed modern technology stacks to replace legacy practices such as GitLab, TestLink, Kanboard, and integration between Selenium/Zabbix.",
                "Wrote Puppet modules to automate infrastructure deployment in Linux.",
                "Leveraged Machine Learning to see if it could automate a specific business process."
            ]
        },
        {
            title: "Freelance Web Developer",
            date: "JUL 2016 - MAY 2018",
            items: [
                "I have two years of experience working as a freelance Web developer. I provide front and back end services, web hosting, and domain name purchases.",
                "My cloud-based server is held with Linode and I manage my domain names through GoDaddy.",
            ]
        },
        {
            title: "Lab Assistant - University of the Shire",
            date: "JUL 2016 - MAY 2018",
            items: [
                "This leadership role was to monitor and assist first-year students with their first structured programming class (in C++).",
                "My primary responsibilities were to assist students with questions, mark labs, and ensure a productive learning environment.",
            ]
        },

    ];

    // on mount do:
    useEffect(() => {
        // trigger animations
        setPaper(true);
    })

    return (
        <React.Fragment>
            <Container>
                <Typography variant="h1">Experience</Typography>

                {
                    experience.map(row => (
                        <Grow in={paper} timeout={1000} mountOnEnter unmountOnExit>
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
export default Experience;