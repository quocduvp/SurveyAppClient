import React, {Component} from 'react';

//ui
import {withStyles} from "@material-ui/core/styles/index";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
//
const styles = theme => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    }
});

class QuestionText extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <form>
                    <Typography>
                        <QuestionAnswerIcon style={{color: '#F44336'}}/>{' '}
                        Why asdasdsdasd ?
                    </Typography>
                    <TextField
                        id="full-width"
                        label="My answer"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="..."
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                    />
                    <div style={{display:'flex'}}>
                        <Typography style={{flex:1}}>

                        </Typography>
                        <Button variant="contained" color="secondary" style={{backgroundColor:'#3F51B5'}}>
                            Submit answer
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withStyles(styles)(QuestionText);