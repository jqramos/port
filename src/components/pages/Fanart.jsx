import React from 'react';
import {makeStyles} from "@material-ui/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import DataService from "../../api/data.service";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {useHistory, useRouteMatch} from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import View from "./View";
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
        cursor: 'pointer'
    }
}));

const theme = createMuiTheme({
    overrides: {
    }
});
export default function Fanart() {
    const classes = useStyles();
    const api = new DataService();
    const fileData =  api.getFanart();
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const redirect = (id) => {
        history.push(`${path}/${id}`);
    }

    return (
        <Switch>
            <Route exact path={path}>
                <div className={classes.root} >
                    <GridList cellHeight={180} className={classes.gridList} cols={3}>
                        {fileData.map((tile) => (
                            <GridListTile key={tile.id} onClick={() => {redirect(tile.id)}}>
                                <img src={'https://storage.googleapis.com/craim/fanart/' + tile.url} alt={tile.title} className={classes.grid}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </Route>
            <Route path={`${path}/:fileId`}>
                <View/>
            </Route>
        </Switch>
    )
}
