import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Zoom } from '@material-ui/core';
import { WorkCard } from '../components';
import rootStyles from '../utils/styles';


const Work = props => {

    const classes = rootStyles();
    // state variable for animations
    const [card, setCard] = useState(false);
    // works array
    const works = [
        {
            title: "Work 1",
            subtitle: "In development",
            body: "Work1 is a single page application that allows the administration of events. It allows the admin to setup an event with a schedule, breakouts(customizable selections for the user), and tickets.Customers can purchase tickets (payments are sent through Stripe) and selet their breakouts, and setup their account.Once the transactions complete they can log into their account, setup their profile, view their schedule, and change their breakout options.",
            img: "./img/placeholder.jpg",
            frontEnd: ["React JS", "Material-UI", "WebPack"],
            backEnd: ["Loopback4 (NodeJS)", "Typescript", "MongoDB", "Stripe Payment API"],
            url: "https://www.rickrolled.com/",
            code: "none",
            avatar: "E",
        },
        {
            title: "Work 2",
            subtitle: "Password protected, contact to view",
            body: "Work 2 is a Wordpress app that allows dentists to track their marketing leads on a monthly basis. Paying users can setup their dentist clinic information and track how many clicks, emails, and leads they are getting on a monthly basis. All billing and payment is automated through the stripe API. Users are also provided with email notifications when certain events take place (such as new leads, monthly reports, and invoices). The project is owned by Fire PR and cannot give out the source, I may be able to setup a dev site upon request.",
            img: "./img/placeholder.jpg",
            frontEnd: ["JQuery", "Bootstrap3", "CSS/LESS"],
            backEnd: ["Wordpress (PHP)", "MySQL", "Stripe Payment API", "Stripe Billing API"],
            url: "https://www.rickrolled.com/",
            code: "none",
            avatar: "D",
        },
        {
            title: "Work 3",
            subtitle: "Production (proprietary)",
            body: "Work3 is an Angular / Node JS single page app.",
            img: "./img/placeholder.jpg",
            frontEnd: ["Angular JS", "Bootstrap3", "JQuery"],
            backEnd: ["Loopback2 (Node JS)", "MongoDB", "NGNIX"],
            url: "https://www.rickrolled.com/",
            code: "none",
            avatar: "P",
        },


    ]

    useEffect(() => {
        setCard(true);
    }, [])

    return (
        <React.Fragment>
            <Typography variant="h1">Work</Typography>
            <Grid container spacing={2}>
                {
                    works.map(work => (
                        <Zoom in={card} timeout={500}>
                            <Grid item xs={12} md={4} key={work.title}>
                                <WorkCard
                                    title={work.title}
                                    subtitle={work.subtitle}
                                    body={work.body}
                                    img={work.img}
                                    frontEnd={work.frontEnd}
                                    backEnd={work.backEnd}
                                    url={work.url}
                                    code={work.code}
                                    avatar={work.avatar}
                                    className={classes.card}
                                />
                            </Grid>
                        </Zoom>
                    ))}
            </Grid>

        </React.Fragment>
    );
}

export default Work;