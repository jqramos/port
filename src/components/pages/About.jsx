import React from 'react';
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white'
    }
}));
export default function About() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <main>
                <span> A Freelance Illustrator</span>
            </main>
        </div>
    )
}
