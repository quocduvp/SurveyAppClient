import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {connect} from 'react-redux'
import Birthday from './Birthday';
import Classroom from './Classroom';
import Gender from './Gender';
import { updateMyProfile } from '../../../Redux/action/myprofileActions';
class DialogEditProfile extends React.Component {
    state = {
        open: false,
        classroom_id:this.props.profile.userinfo.classroom_id === null ? "" : this.props.profile.userinfo.classroom_id,
        first_name:this.props.profile.userinfo.first_name === null ? "" : this.props.profile.userinfo.first_name,
        last_name:this.props.profile.userinfo.last_name === null ? "" : this.props.profile.userinfo.last_name,
        gender:this.props.profile.userinfo.gender === null ? "" : this.props.profile.userinfo.gender,
        birthday:this.props.profile.userinfo.birthday === null ? "" : this.props.profile.userinfo.birthday.substring(0,10),
        phone_number:this.props.profile.userinfo.phone_number === null ? "" : this.props.profile.userinfo.phone_number,
        description: this.props.profile.userinfo.description === null ? "" : this.props.profile.userinfo.description,
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
        this.props.dispatch(updateMyProfile(this.state))
        this.setState({open: false});
    }
    //format date
    handleDateChange = (date) => {
        let months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'agu', 'sep', 'oct', 'nov', 'dec'];
        let day = date.getDate();
        let year = date.getFullYear();
        let month = months[date.getMonth()];
        let birthday = month + "-" + day + "-" + year
        this.setState({
            birthday: birthday
        })
    }
    //gender
    handleGenderChange = (e) => {
        e.preventDefault()
        if(e.target.value === "Male"){
            this.setState({
                gender : true
            })
        }
        if(e.target.value === "Female"){
            this.setState({
                gender : false
            })
        }
    }
    render() {
        return (
            <div>
                <Button variant={'extendedFab'} style={{backgroundColor:'#76d275'}} onClick={this.handleClickOpen}>
                    Edit my profile
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Edit my profile</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Input to form
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Last name"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'last_name'
                            value={this.state.last_name}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="First name"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'first_name'
                            value={this.state.first_name}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Phone number"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'phone_number'
                            value={this.state.phone_number}
                            onChange={this.ChangeForm.bind(this)}
                            required
                        />
                        <Gender change={this.handleGenderChange.bind(this)} gender={this.state.gender}/>
                        <Birthday change={this.handleDateChange} birthday={this.state.birthday}/>
                        <Classroom changeClassroom={this.ChangeForm.bind(this)} classroom_id={this.state.classroom_id}/>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            type="text"
                            fullWidth
                            autoComplete={'off'}
                            name = 'description'
                            multiline
                            value={this.state.description}
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
export default connect()(DialogEditProfile)