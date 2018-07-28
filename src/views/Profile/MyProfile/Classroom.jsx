import React, { Component } from 'react';

//
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import { getListClassroom } from '../../../Redux/action/classroomActions'
class Classroom extends Component {
    state = {
        classrooms: []
    }
    componentDidMount() {
        getListClassroom()
            .then(async r => {
                await this.setState({
                    classrooms: r.data
                })
            }).catch(err => {

            })
    }
    render() {
        const { classes } = this.props
        return (
            <FormControl fullWidth className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">Section</InputLabel>
                <Select
                    value={this.props.classroom_id}
                    name="classroom_id"
                    input={<Input id="name-error" />}
                    onChange={this.props.changeClassroom}
                >
                    {this.state.classrooms.map((classroom, id) => {
                        return (
                            <MenuItem key={id} value={classroom.id}>
                                {classroom.class_code}{' '}({classroom.faculty.faculty_name})
                            </MenuItem>
                        )
                    })}
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
        marginBottom: '8px',
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

export default withStyles(styles)(Classroom);