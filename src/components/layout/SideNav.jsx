import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faArtstation, faDeviantart, faYoutube} from "@fortawesome/free-brands-svg-icons";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Original from "../pages/Original";
import Commission from "../pages/Commission";
import Fanart from "../pages/Fanart";
import About from "../pages/About";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        borderRight: '#272727'
    },
    drawer: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        borderRight: '#272727',
        textAlign: 'center',
        color: 'white',
        position: 'relative'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
        fontSize: 17
    },
    title: {
        textAlign: "center",
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        fontSize: 40,
        backgroundColor: '#2a2e37',
        color: 'white'
    },
    darkTheme: {
        backgroundColor: '#2a2e37',
        textAlign: 'center',
        color: 'white'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    paper: {
        width: '100%',
    },
    link: {
        flexGrow: 1,
        textAlign: 'center',
        color: 'white',
        textDecoration: 'none',
        fontSize: 14
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Rajdhani',
        h1: {
            fontSize: 60
        }
    },
    overrides: {
        MuiDrawer: {
            paper: {
                position: 'relative'
            },
        }
    }
});

export default function SideNav() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline />
            <Router>
                <Grid container>
                    <Grid item xs={4}>
                        <Drawer
                            className={classes.drawer}
                            variant="permanent"
                            anchor="left"
                        >
                            <div className={classes.title}>
                                <Typography variant="h1">CRAIM</Typography>
                            </div>
                            <List className={classes.drawer}>
                                {[
                                    {
                                        name: 'ORGINALS',
                                        path: ""
                                    },{
                                        name: 'FANARTS',
                                        path: "/fanart"
                                    },{
                                        name: 'COMMISSIONS',
                                        path: "/commissions"
                                    },{
                                        name: 'ABOUT',
                                        path: "/about"
                                    }
                                ].map((obj, index) => (
                                    <ListItem className={classes.drawer} button key={obj.name}>
                                        <Link className={classes.link} to={obj.path}>{obj.name}</Link>
                                    </ListItem>
                                ))}
                            </List>
                            <div className={classes.title}>
                                <a target="_blank" className={classes.menuButton}  href="https://facebook.com/craim000" >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a target="_blank" className={classes.menuButton}  href="https://www.instagram.com/craim_" >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a target="_blank" className={classes.menuButton}  href="https://crime000.deviantart.com" >
                                    <FontAwesomeIcon icon={faDeviantart} />
                                </a>
                                <a target="_blank" className={classes.menuButton}  href="https://artstation.com/craim" >
                                    <FontAwesomeIcon icon={faArtstation} />
                                </a>
                                <a target="_blank" className={classes.menuButton}  href="https://www.youtube.com/channel/UC0RbiPoec4UKRgjU0JD3x1g" >
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                        </Drawer>
                    </Grid>

                    <Grid item xs={8}>
                        <main className={classes.content}>
                            <Switch>
                                <Route exact path="/" component={Original} />
                                <Route exact path="/commissions" component={Commission} />
                                <Route exact path="/fanart" component={Fanart} />
                                <Route exact path="/about" component={About} />
                            </Switch>
                        </main>
                    </Grid>
                </Grid>
            </Router>

        </div>
        </ThemeProvider>
    )
}
