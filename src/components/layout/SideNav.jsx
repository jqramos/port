import {makeStyles} from "@material-ui/core/styles";
import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


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
        borderRight: '#272727'
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

export default function SideNav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <List className={classes.drawer}>
                    {['Home', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </div>
    )
}
