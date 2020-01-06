import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, List, CardActionArea, Tooltip, ListItem, ListItemIcon, ListItemText, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@material-ui/core';
import { Favorite, Share, ExpandMore, MoreVert, CheckCircle, Navigation, GitHub } from '@material-ui/icons';
import { navigate } from 'hookrouter';
const useStyles = makeStyles(theme => ({
    card: {
        // maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardArea: {
        minHeight: 370
    },
    cardHead: {
        backgroundColor: '#ffa600',
    },
    avatar: {
        color: "#ffa600",
        backgroundColor: "#b0dd48"
    },
    bullet: {
        color: '#33ffbc',
    },
    nav: {
        color: "#b0dd48",
    },
    more: {
        color: "#ffa600",
    }

}));

const WorkCard = props => {
    // import styles
    const classes = useStyles();
    // state variables
    const [expanded, setExpanded] = React.useState(false);
    // expand the more details section
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    // navigate to external url
    const handleExternalUrl = () => {
        window.open(props.url, '_blank');
    }
    // navigate to source code (if allowed)
    const handleSourceCode = () => {
        window.open(props.code, '_blank');
    }


    useEffect(() => {
        console.log(props.frontEnd);
    }, []);

    return (
        <React.Fragment>
            <Card className={classes.card}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Avatar" className={classes.avatar}>
                            {props.avatar}
                        </Avatar>
                    }
                    title={props.title}
                    subheader={props.subtitle}
                    className={classes.cardHead}
                />
                <CardActionArea onClick={handleExternalUrl}>
                    <CardMedia
                        className={classes.media}
                        image={props.img}
                        title={props.title}
                    />
                </CardActionArea>
                <CardContent className={classes.cardArea}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography variant="h6" align="left">Front End</Typography>
                            <List>
                                {
                                    props.frontEnd.map(item => (
                                        <ListItem key={item}>
                                            <ListItemIcon>
                                                <CheckCircle className={classes.bullet} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" align="left">Back End</Typography>
                            <List>
                                {
                                    props.backEnd.map(item => (
                                        <ListItem key={item}>
                                            <ListItemIcon>
                                                <CheckCircle className={classes.bullet} />
                                            </ListItemIcon>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </Grid>
                    </Grid>

                </CardContent>
                <CardActions disableSpacing>
                    <Tooltip title={"Go to Site"}>
                        <IconButton aria-label="go to site" onClick={handleExternalUrl}>
                            <Navigation className={classes.nav} />
                        </IconButton>
                    </Tooltip>
                    {
                        props.code !== 'none' &&
                        <Tooltip title="Source Code">
                            <IconButton aria-label="go to site" onClick={handleSourceCode}>
                                <GitHub />
                            </IconButton>
                        </Tooltip>
                    }
                    <Tooltip title="More Details">
                        <IconButton

                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="more details"
                        >
                            <ExpandMore className={classes.nav} />
                        </IconButton>
                    </Tooltip>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.body}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </React.Fragment>
    )
}

export default WorkCard;