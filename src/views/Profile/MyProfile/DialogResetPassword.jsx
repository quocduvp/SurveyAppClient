import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import { resetPassword } from '../../../Redux/action/accountActions';

class DialogResetPassword extends React.Component {
    state = {
        password : "",
        password2 : "",
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
            password: this.state.password,
            password2 : this.state.password2
        }
        console.log(form)
        this.props.dispatch(resetPassword(form))
        this.setState({open: false})
    }
    //check password
    CheckPassword = () => {
        // const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        const UpperCase = /(?=.*?[A-Z])/
        const LowerCase = /(?=.*?[a-z])/
        const number = /(?=.*?[0-9])/
        const specialChar = /(?=.*?[#?!@$%^&*-])/
        const len8 = /.{8,}/
        if (!UpperCase.test(this.state.password)) {
            return false
        } else if (!LowerCase.test(this.state.password)) {
            return false
        } else if (!number.test(this.state.password)) {
            return false
        } else if (!specialChar.test(this.state.password)) {
            return false
        } else if (!len8.test(this.state.password)) {
            return false
        } else {
            return true
        }
    }
    componentDidUpdate(){
        this.CheckPassword()
        this.CheckConfirmPassword()
    }
    //check confirm password
    CheckConfirmPassword = ()  => {
        if (this.state.password === this.state.password2) {
            return true
        } else {
            return false
        }
    }
    render() {
        return (
            <div style={{marginTop:'16px'}}>
                <Button variant={'extendedFab'} style={{backgroundColor:'#76d275'}} onClick={this.handleClickOpen}>
                    Reset my password
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        Reset password
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Only use the password reset function when the user reported forget password
                        </DialogContentText>
                        <TextField
                            error={!this.CheckPassword()}
                            autoFocus
                            margin="dense"
                            label="New password"
                            type="password"
                            fullWidth
                            autoComplete={'off'}
                            name = 'password'
                            helperText={this.state.password.length > 0 ? this.CheckPassword() ? 'Password valid' : 'Password invalid' : ''}
                            value={this.state.password}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        
                        <TextField
                            error={!this.CheckConfirmPassword()}
                            disabled={this.state.password.length > 0 ? !this.CheckPassword() : true}
                            autoFocus
                            margin="dense"
                            label="Confirm password"
                            type="password"
                            fullWidth
                            autoComplete={'off'}
                            name = 'password2'
                            helperText={this.state.password2.length > 0 ? this.CheckConfirmPassword() ? 'Password valid' : 'Password invalid' : ''}
                            value={this.state.password2}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={this.state.password2.length > 0 ? !this.CheckConfirmPassword() : true} onClick={this.SubmitForm.bind(this)} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default connect()(DialogResetPassword)