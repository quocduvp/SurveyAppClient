import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { submitFeedback } from '../../Redux/action/feedbackActions';
import swal from 'sweetalert2'
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    btnRight: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    }
});

class Form extends React.Component {
    state = {
        title : "",
        description : ""
    }
    ChangeForm(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    Sumbit(e) {
        e.preventDefault()
        submitFeedback(this.state).then(async r=>{
           await swal({
               type : 'success',
               title : 'Success',
               text : r.data.message
           })
           this.setState({
            title : "",
            description : ""
           })
        }).catch(async err=>{
            await swal({
                type : 'error',
                title : 'Error',
                text : 'There was an error submitting, please check again.'
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.Sumbit.bind(this)} className={classes.container} noValidate>
                <TextField
                    id="full-width"
                    label="Title"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.ChangeForm.bind(this)}
                    name='title'
                    value={this.state.title}
                    placeholder="Title"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="full-width"
                    label="Subject"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={this.ChangeForm.bind(this)}
                    name='description'
                    value={this.state.description}
                    multiline
                    placeholder="subject"
                    fullWidth
                    margin="normal"
                />
                <div className={classes.btnRight}>
                    <Button type='submit' variant="contained" color="primary"
                                                style={{backgroundColor: '#4CAF50'}}>
                        Submit
                    </Button>
                </div>
            </form>
        );
    }
}

export default withStyles(styles)(Form);
