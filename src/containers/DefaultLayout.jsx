import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
//ui
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import SideBarLayout from './SideBarLayout'
import routes from "../routes";
import AvatarProfile from './AvatarProfile';
class DefaultLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
        this.handleDrawerClose = this.handleDrawerClose.bind(this)
    }

    handleDrawerOpen(e){
        e.preventDefault()
        this.setState({open: true});
    };

    handleDrawerClose(e){
        e.preventDefault()
        this.setState({open: false});
    };

    componentDidMount() {
        this.requestRedux()
    }

    requestRedux() {
        if (!this.props.myprofile.fetched)
            this.props.history.push('/Login')
    }

    render() {
        const {classes, theme,myprofile} = this.props;
        return (
            <div className={classes.root}>
                <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                    <Toolbar disableGutters={!this.state.open} style={{margin: '0 10px 0px 0'}}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, this.state.open && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap style={{flex: 1}}>
                            Surveys Environment
                        </Typography>
                        <AvatarProfile username={myprofile.profile.username} avatar={myprofile.profile.userinfo.avatar}/>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
                    }}
                    open={this.state.open}>
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <SideBarLayout/>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        {routes.map((route, idx) => {
                                return route.component ? (
                                        <Route key={idx} path={route.path} exact={route.exact} name={route.name}
                                               render={props => (
                                                   <route.component {...props} />
                                               )}/>)
                                    : (null);
                            },
                        )}
                        <Redirect from={'/'} to={'/Home'}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        backgroundColor :'#00701a',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        overflow: 'auto'
    },
});

const mapStateToProps = (state) => {
    return {
        myprofile: state.myprofile
    }
}

export default connect(mapStateToProps)(withStyles(styles, {withTheme: true})(DefaultLayout));