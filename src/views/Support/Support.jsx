import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Form from './Form';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding : '16px'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Support extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center">
              <Grid xs={12} sm={10} md={7} item>
                <Paper className={classes.paper}>
                    <Form/>
                </Paper>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Support);
