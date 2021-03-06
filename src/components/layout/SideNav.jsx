import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect, useState} from 'react';
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
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import Original from "../pages/Original";
import Commission from "../pages/Commission";
import Fanart from "../pages/Fanart";
import About from "../pages/About";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#111',
        borderRight: '#111'
    },
    drawer: {
        flexGrow: 1,
        backgroundColor: '#111',
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
        backgroundColor: '#111',
        color: 'white'
    },
    center: {
        textAlign: 'center',
        width: '100%'
    },
    darkTheme: {
        backgroundColor: '#111',
        textAlign: 'center',
        color: 'white'
    },
    nav:{
        backgroundColor: '#111',
        textAlign: 'center',
        color: 'white',
        borderBottom: '1px solid white'
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
    },
    active: {
        '& div': {
            color: '#67fff0'
        }
    },
    borderRight: {
        borderRight: '1px solid rgb(255 222 222 / 12%)',

    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Rajdhani',
        h1: {
            fontSize: 46,
            cursor: 'pointer'
        }
    },
    overrides: {
        MuiDrawer: {
            paper: {
                position: 'relative',
            },
            paperAnchorDockedLeft: {
                borderRight: 'none'
            }
        }
    }
});

export default function SideNav() {
    const classes = useStyles();
    let menuMap = [
        {
            name: 'ORGINALS',
            path: "/originals"
        },{
            name: 'FANARTS',
            path: "/fanart"
        },{
            name: 'COMMISSIONED WORKS',
            path: "/commissions"
        },{
            name: 'ABOUT',
            path: "/about"
        }
    ];
    let [url, setUrl] = useState(window.location.href);

    const handleChange = (path) => {
        setUrl(path);
    };
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline />
            <Router>
                <Grid container>

                    <Hidden mdUp>
                        <Grid xs={12}>
                            <AppBar
                                position="fixed"
                                className={classes.nav}
                            >
                                <Toolbar>
                                    <Typography variant="h6" noWrap>
                                        CRAIM
                                    </Typography>
                                </Toolbar>
                            </AppBar>
                        </Grid>
                    </Hidden>

                    <Hidden smDown>
                        <Grid item xs={4} className={classes.borderRight}>
                            <Drawer
                                className={classes.drawer}
                                variant="permanent"
                                anchor="left"
                            >
                                <div className={classes.title}>
                                    <Typography variant="h1">CRAIM</Typography>
                                </div>
                                <List className={classes.drawer}>
                                    {menuMap.map((obj, index) => (
                                        <Link key={obj.name} className={`${classes.link} ${url.includes(obj.path) ? classes.active:''}`} to={obj.path}
                                              onClick={() => {
                                                  handleChange(obj.path)
                                              }}>
                                            <ListItem className={classes.drawer} button key={obj.name}>
                                                <div className={classes.center}>{obj.name}</div>
                                            </ListItem>
                                        </Link>
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
                    </Hidden>
                    <Grid item xs={12} sm={12} md={8}>
                        <main className={classes.content}>
                            <Switch>
                                <Route exact path="/">
                                    <Redirect to="/originals" />
                                </Route>
                                <Route path="/originals" component={Original} />
                                <Route path="/commissions" component={Commission} />
                                <Route path="/fanart" component={Fanart} />
                                <Route path="/about" component={About} />
                            </Switch>
                        </main>
                    </Grid>
                </Grid>
            </Router>

        </div>
        </ThemeProvider>
    )
}
