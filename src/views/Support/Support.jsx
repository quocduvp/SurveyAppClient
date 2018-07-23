import React, {Component} from 'react';
//ui
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";


class Support extends Component {
    render() {
        const {classes} = this.props
        return (
            <div>
                <Paper className={classes.contain}>
                    <TextField
                        id="full-width"
                        label="Label"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                    />
                </Paper>
            </div>
        );
    }
}

const styles = theme => ({
    container:{
      position : 'relative'
    },
    contain : {
        position: 'absolute',
        left : '50%',
        top : '50%'
    }
})
export default withStyles(styles)(Support);