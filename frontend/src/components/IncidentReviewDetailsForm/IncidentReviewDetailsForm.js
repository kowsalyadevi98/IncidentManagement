
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit * 1,
    },
    subTitle: {
        marginTop: theme.spacing.unit * 2,
    }
});

class IncidentReviewDetailsForm extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={1}>

                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            {this.props.incident &&
                                <div>
                                    <Typography variant="h6" component="h3" className={classes.subTitle} gutterBottom>
                                        Incident Details.
                            </Typography>
                                    <List disablePadding>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Title" secondary={this.props.incident.title} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Description" secondary={this.props.incident.description} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Status" secondary={this.props.incident.occurance} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Date" secondary={this.props.incident.date} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Time" secondary={this.props.incident.time} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Election" secondary={this.props.incident.election_id} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Catagory" secondary={this.props.incident.catogory} />
                                        </ListItem>
                                    </List>
                                </div>}
                        </Grid>
                        <Grid item xs={4}>
                            {this.props.incident &&
                                <div>
                                    <Typography variant="h6" component="h3" className={classes.subTitle}>
                                        Location Details.
                            </Typography>

                                    <List disablePadding>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Location name/description" secondary={this.props.incident.location} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Address:" secondary={this.props.incident.address} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Coordinates" secondary={this.props.incident.coordinates} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Province" secondary={this.props.incident.district_id} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="District" secondary={this.props.incident.district_id} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Polling division" secondary={this.props.incident.polling_station_id} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Ward" secondary={this.props.incident.ward_id} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Police Station" secondary={this.props.incident.police_station_id} />
                                        </ListItem>
                                    </List>
                                </div>}

                        </Grid>
                        <Grid item xs={4}>
                            {this.props.reporter &&
                                <div>
                                    <Typography variant="h6" component="h3" className={classes.subTitle}>
                                        Contact Details.
                            </Typography>

                                    <List disablePadding>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Location name/description" secondary={this.props.reporter.name} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Address" secondary={this.props.reporter.address} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Telephone" secondary={this.props.reporter.telephone} />
                                        </ListItem>
                                        <ListItem className={classes.listItem}>
                                            <ListItemText primary="Email" secondary={this.props.reporter.email} />
                                        </ListItem>
                                    </List>
                                </div>}
                        </Grid>
                    </Grid>








                </Paper>
            </div>
        );
    };
}

IncidentReviewDetailsForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncidentReviewDetailsForm);