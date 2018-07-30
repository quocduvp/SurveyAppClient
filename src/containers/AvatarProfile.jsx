import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PowerSettingsNew from '@material-ui/icons/PowerSettingsNew';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux'
import {createHashHistory} from 'history'
const hist = createHashHistory()
const styles = theme => ({
  root: {
    
  },
});

class AvatarProfile extends React.Component {
  button = null;

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  GoToProfile = () => {
    hist.push('/Profile')
  }
  Logout(e){
    e.preventDefault()
    sessionStorage.removeItem('access_token')
    window.location.href = '/login'
  }
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <div className={classes.root}>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {this.props.avatar !== "" ? <Avatar alt="avatar" src={this.props.avatar}/> :
            <Avatar>{this.props.username !== undefined ? this.props.username.substring(0,1).toUpperCase(): ''}</Avatar>
          }
        </IconButton>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
            <MenuItem onClick={()=>this.GoToProfile()}>
              <PermIdentity/> My profile
            </MenuItem>
            <MenuItem onClick={this.Logout.bind(this)}>
              <PowerSettingsNew/> Logout
            </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(connect()(AvatarProfile));