import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {forgotPassword} from "../../Redux/action/accountActions";
import {connect} from 'react-redux'
class ReportAccount extends React.Component {
    state = {
        username : "",
        open: false,
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };
    ChangeForm(e){
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    SubmitForm(e){
        e.preventDefault()
        let form = {
            username: this.state.username,
        }
        this.props.dispatch(forgotPassword(form))
        this.setState({open: false})
    }
    render() {
        return (
            <div style={{cursor:'pointer',marginTop:'16px'}}>
                <span variant={'contained'} color={'primary'} onClick={this.handleClickOpen}>
                    Forgot your password?
                </span>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Report account
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please enter your username correctly
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="My username"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'username'
                            value={this.state.username}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.SubmitForm.bind(this)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default connect()(ReportAccount)