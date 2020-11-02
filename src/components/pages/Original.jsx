import React, {Component} from 'react';
import {makeStyles} from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import DataService from "../../api/data.service.js";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#111'
    },
    gridList: {
        height: "max-content"
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    grid: {
        paddingTop: theme.spacing(14)
    }
}));

const theme = createMuiTheme({
    overrides: {
    }
});


export default function Original() {
    const classes = useStyles();
    const api = new DataService();
    const fileData =  api.getOriginal();

    return (
        <div className={classes.root} >
            <GridList cellHeight={180} spacing={4} className={classes.gridList} cols={3}>
                {fileData.map((tile) => (
                    <GridListTile key={tile.id}   >
                        <img src={'https://storage.googleapis.com/craim/original/' + tile.link} alt={tile.title} className={classes.grid}/>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}
