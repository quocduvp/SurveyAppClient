import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop : '16px',
        margintBottom : '16px'
    }
});
class Pane extends Component {
    render() {
        const {classes} = this.props
        return (
            <Paper style={{backgroundColor:this.props.bgColor}} className={classes.root} elevation={1}>
                {this.props.children}
            </Paper>
        );
    }
}
export default withStyles(styles)(Pane);