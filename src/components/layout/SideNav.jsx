import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {ThemeProvider} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        borderRight: '#272727'
    },
    drawer: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        width: 450,
        borderRight: '#272727',
        textAlign: 'center',
        color: 'white'
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
    }
}));

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Rajdhani',
        h1: {
            fontSize: 60
        }
    }
});

export default function SideNav() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <div className={classes.title}>
                    <Typography variant="h1">CRAIM</Typography>
                </div>
                <List className={classes.drawer}>
                    {['WORKS', 'SKETCHES', 'ABOUT'].map((text, index) => (
                        <ListItem className={classes.drawer} button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </div>
        </ThemeProvider>
    )
}
