import './NavBar.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        height: 130
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
        paddingTop: 20,
        fontSize: 40
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container spacing={3} className={classes.title}>
                        <Grid item xs={12}>
                            CRAIM
                        </Grid>
                        <Grid item xs={12}>
                            asd
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
