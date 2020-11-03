import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {useHistory, useParams, useRouteMatch} from "react-router";
import DataService from "../../api/data.service";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft, faBackward} from "@fortawesome/free-solid-svg-icons";
import GridListTile from "@material-ui/core/GridListTile";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center'
    },
    image: {
        maxWidth:'100%',
        height: 'auto'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
        fontSize: 40,
        position: 'absolute',
        cursor: 'pointer'
    }
}));

export default function View() {
    const classes = useStyles();
    let { fileId } = useParams();
    let { path, url } = useRouteMatch();
    let dir = "original";
    const api = new DataService();
    let fileData =  [];
    let orgPath = "original";

    if (path.includes('commissions')) {
        fileData =  api.getCommission();
        orgPath = 'commissions';
        dir = "comm";
    } else if (path.includes('fanart')) {
        orgPath = 'fanart';
        fileData =  api.getFanart();
        dir = "fanart";
    } else {
        fileData =  api.getOriginal();
    }
    let fileName = fileData.find(
        val => val.id === fileId || val.id === parseInt(fileId)
    );
    const history = useHistory();
    if (fileName) {
        return (
            <div>
                <FontAwesomeIcon className={classes.menuButton} icon={faArrowAltCircleLeft}  onClick={() => {history.goBack()}}/>
                <div className={classes.root}>
                    <img className={classes.image} src={`https://storage.googleapis.com/craim/${dir}/${fileName.url}`}/>
                </div>
            </div>
        );
    } else {
        return (
            <div>

            </div>
        );
    }
}
