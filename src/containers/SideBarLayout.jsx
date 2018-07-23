import React, {Component} from 'react';
//
import {Link} from 'react-router-dom'
//ui
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//list menu
import {navItem} from './navbarItem'

class SideBarLayout extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    {navItem.map((item, id) => {
                        return (
                            <Link to={item.url} key={id} replace className={classes.link}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <item.navIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={item.navName}/>
                                </ListItem>
                            </Link>
                        )
                    })}
                </List>
            </div>
        );
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    link:{
        textDecoration : 'none'
    },
    button: {
        backgroundColor: '#26C6DA'
    },
});
export default withStyles(styles)(SideBarLayout);