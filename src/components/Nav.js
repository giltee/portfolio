import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Routes from '../utils/routes';
import { useRoutes, navigate } from 'hookrouter';
import { Home, Work, MenuBook, DesktopMac, BrightnessAuto, PermIdentity } from '@material-ui/icons';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: "#ffa600"
    },
    tool: {
        backgroundColor: "#ffa600"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#ffa600",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: "#e8e8e8",
    },
    active: {
        backgroundColor: "#b0dd48"
    }
}));

const Nav = (props) => {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [nav, setNav] = useState({
        home: true,
        work: false,
        about: false,
        experience: false,
        education: false,
        awards: false,
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNav = (e) => {
        // get id depending on where user clicked (this is a material ui issue)
        const id = e.target.id.length > 0 ? e.target.id : e.target.parentNode.id;
        console.log(id === "home");
        // check to see if root url
        if (id === "home") {
            console.log("true")
            setNav({ [id]: true });
            navigate('/');
        }
        else {

            setNav({ [id]: true });
            navigate(`/${id}`);
        }
        window.scrollTo(0, 0);
    }

    const router = useRoutes(Routes);

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                <ListItem id="home" className={nav.home && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="home"><Home id="home" /></ListItemIcon>
                    <ListItemText id="home" primary={"Home"} />
                </ListItem>
                <ListItem id="work" className={nav.work && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="work"><Work id="work" /></ListItemIcon>
                    <ListItemText id="work" primary={"Work"} />
                </ListItem>
                <ListItem id="about" className={nav.about && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="about"><PermIdentity id="about" /></ListItemIcon>
                    <ListItemText id="about" primary={"About"} />
                </ListItem>
                <ListItem id="experience" className={nav.experience && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="experience"><DesktopMac id="experience" /></ListItemIcon>
                    <ListItemText id="experience" primary={"Experience"} />
                </ListItem>
                <ListItem id="education" className={nav.education && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="education"><MenuBook id="education" /></ListItemIcon>
                    <ListItemText id="education" primary={"Education"} />
                </ListItem>
                <ListItem id="awards" className={nav.awards && classes.active} button onClick={handleNav}>
                    <ListItemIcon id="awards"><BrightnessAuto id="awards" /></ListItemIcon>
                    <ListItemText id="awards" primary={"Awards"} />
                </ListItem>
            </List>
            <Divider />
        </div >
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.tool}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Portfolio
          </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {router}
            </main>

        </div>
    );
}

export default Nav;