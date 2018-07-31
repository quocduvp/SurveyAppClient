import React, { Component } from 'react';
import {connect} from 'react-redux'
//ui
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {nonImage} from '../../nonImage'
import DialogEditProfile from './MyProfile/DialogEditProfile';
import UploadAvatar from './MyProfile/UploadAvatar';
import DialogResetPassword from './MyProfile/DialogResetPassword';
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    center: {
        display: 'flex',
        flexWrap: 'wrap',
        width : '100%'
    },
    username: {
        display: 'flex',
        flexDirection : 'column',
        justifyContent : 'flex-end',
        padding :'8px',
    },
    avatar:{
        width : '150px',
        height : '150px',
        borderRadius : 0,
        position : 'relative'
    },
    buttonEdit:{
        position : 'absolute',
        bottom: 0,
        right:0
    },
    details:{
        marginTop : '16px',
        marginBottom : '8px'
    }
});
class MyProfile extends Component {
    render() {
        const {classes} = this.props
        const profile = this.props.myprofile.profile
        return (
            <div>
                <Typography variant="title" style={{color:'#fff'}} gutterBottom>
                        My Profile
                    </Typography>
                <div className={classes.center}>
                    <div className={classes.avatar}>
                        <Avatar alt="Remy Sharp" src={profile.userinfo.avatar !== "" ? profile.userinfo.avatar : nonImage} 
                        className={classes.avatar} />
                        <div className={classes.buttonEdit}>
                            <UploadAvatar/>
                        </div>
                    </div>
                    <div className={classes.username}>
                        <Typography variant="title">
                            {profile.username}
                        </Typography>
                        {profile.userinfo.classroom !== null ?
                            <Typography variant="subheading">
                                {profile.userinfo.classroom.class_code} {' '}
                                ({profile.userinfo.classroom.faculty_name})
                            </Typography> :
                            ''
                        }
                    </div>
                </div>
                <div className={classes.details}>
                    <Typography variant="headline" component="h3">
                    Fullname:
                    </Typography>
                    <Typography component="p">
                    {profile.userinfo.last_name}{' '}{profile.userinfo.first_name}
                    </Typography>
                    <Typography variant="headline" component="h3">
                    Gender:
                    </Typography>
                    <Typography component="p">
                    {profile.userinfo.gender ? 'Male' : 'Female'}
                    </Typography>
                    <Typography variant="headline" component="h3">
                    Birthday:
                    </Typography>
                    <Typography component="p">
                    {profile.userinfo.birthday !== null ?profile.userinfo.birthday.substring(0,10) : ''}
                    </Typography>
                    <Typography variant="headline" component="h3">
                    Phone number:
                    </Typography>
                    <Typography component="p">
                    {profile.userinfo.phone_number}
                    </Typography>
                    <Typography variant="headline" component="h3">
                    Description:
                    </Typography>
                    <Typography component="p">
                    {profile.userinfo.description}
                    </Typography>
                </div>
                <div style={{textAlign : 'center'}}>
                    <DialogEditProfile profile={profile}/>
                    <DialogResetPassword/>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        myprofile : state.myprofile
    }
}
export default withStyles(styles)(connect(mapStateToProps)(MyProfile));