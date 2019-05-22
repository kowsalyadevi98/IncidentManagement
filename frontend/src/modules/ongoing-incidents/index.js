import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import DomainContainer from '../../components/DomainContainer';
import IncidentView from './containers/IncidentView';
import { Route } from "react-router-dom";
import { withRouter } from "react-router";

import { compose } from 'redux'

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HomeIcon from '@material-ui/icons/Home';

import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});
class Ongoing extends Component {

    render() {

        const { classes, theme, match } = this.props;
        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button component={Link} to={`${match.url}`}>
                        <ListItemIcon><AssignmentIcon /></ListItemIcon>
                        <ListItemText primary='View Incident' />
                    </ListItem>
                </List>

            </div>
        );

        // return (<DomainContainer header={() =>
        //     <Typography variant="h5" color='inherit' noWrap className='line-height-fix'>
        //         <FormattedMessage
        //             id='eclk.incident.management.ongoing.incidents'
        //             description='Ongoing Incidents'
        //             defaultMessage='Ongoing Incidents'
        //         />
        //     </Typography>
        // }
        //     content={() => (
                
        //     )}
        //     drawer={drawer}
        // />)

        return (
            <Route exact 
                path={`${match.url}`} 
                component={()=> 
                <IncidentView />
                }
            />
        )
    }
}

export default withRouter(withStyles(styles, { withTheme: true })(Ongoing));