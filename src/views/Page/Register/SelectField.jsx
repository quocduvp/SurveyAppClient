import React, {Component} from 'react';

//
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
class SelectField extends Component {
    render() {
        const {classes} = this.props
        return (
            <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Section</InputLabel>
                <Select
                    value={this.props.section}
                    name="section"
                    input={<Input id="name-error" />}
                    onChange={this.props.changeSection}
                >
                    <MenuItem value="Student">Student</MenuItem>
                    <MenuItem value="Teacher">Teacher</MenuItem>
                </Select>
            </FormControl>
        );
    }
}

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        marginTop: '16px',
        marginBottom : '8px',
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(SelectField);