import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FileUpload from '@material-ui/icons/FileUpload';
import {connect} from 'react-redux'
import { uploadAvatar } from '../../../Redux/action/myprofileActions';
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class UploadAvatar extends React.Component{
    ChangeForm(e){
        e.preventDefault()
        this.props.dispatch(uploadAvatar(e.target.files[0]))
    }
    render(){
        const { classes } = this.props;
        return(
            <div>
                <input onChange={this.ChangeForm.bind(this)} name="file" accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <IconButton color="primary" className={classes.button} component="span">
                        <FileUpload />
                    </IconButton>
                </label>
            </div>
        )
    }
}
export default withStyles(styles)(connect()(UploadAvatar));
