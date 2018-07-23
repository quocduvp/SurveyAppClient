import React, {Component} from 'react';
//
import {withStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
class ListChoice extends Component {
    state = {
        value: "",
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };
    render() {
        const question = this.props.question
        const {classes} = this.props
        return (
            <div>
                <FormControl style={{width: '100%'}}>
                    <RadioGroup
                        aria-label="gender"
                        name="gender2"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange.bind(this)}
                    >
                        {question.map((ques, id) => {
                            return (
                                <FormControlLabel style={{flex:1}} key={id} value={ques} control={<Radio color="primary"/>}
                                                  label={ques}/>
                            )
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        width : '100%',
        margin: `${theme.spacing.unit}px 0`,
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
});

export default withStyles(styles)(ListChoice);