import './NavBar.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#2a2e37',
        height: 100
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: '#2a2e37',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div >
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            asd
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
