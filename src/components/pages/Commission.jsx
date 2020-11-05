import React from 'react';
import DataService from "../../api/data.service";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {createMuiTheme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useHistory, useRouteMatch} from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import View from "./View";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";


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
    },
    page: {
        color: 'white',
        textAlign: 'center',
        '& button,div': {
            color: 'white'
        },
        '& nav': {
            width: 'max-content',
            display: 'inline-block'
        },
        '& .Mui-selected': {
            backgroundColor: 'rgb(255 255 255 / 29%)'
        }
    }
}));

const theme = createMuiTheme({
    overrides: {
    }
});

export default function Commission() {
    const classes = useStyles();
    const api = new DataService();
    const fileData =  api.getCommission();
    let { path, url } = useRouteMatch();
    const history = useHistory();
    const redirect = (id) => {
        history.push(`${path}/${id}`);
    }
    const [page, setPage] = React.useState(1);
    let pageMap = fileData.slice((1 - 1) * 9, 1 * 9);
    let [content, setContent] = React.useState(pageMap);
    const handleChange = (event, value) => {
        setPage(value);
        pageMap = fileData.slice((value - 1) * 9, value * 9);
        setContent(pageMap);
    };

    return (
        <Switch>
            <Route exact path={path}>
                <div className={classes.root} >
                    <GridList cellHeight={180} className={classes.gridList} cols={3}>
                        {content.map((tile) => (
                            <GridListTile key={tile.id} onClick={() => {redirect(tile.id)}}>
                                <img src={'https://storage.googleapis.com/craim/comm/' + tile.url} alt={tile.title} className={classes.grid}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
                <Grid className={classes.page}>
                    <Pagination  className={classes.page} count={fileData.length%9===0 ? fileData.length/9 : Math.floor(fileData.length/9) +1} page={page} onChange={handleChange} />
                </Grid>
            </Route>
            <Route path={`${path}/:fileId`}>
                <View/>
            </Route>
        </Switch>
    )
}
