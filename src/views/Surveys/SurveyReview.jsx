import React, {Component} from 'react';
//ui
import Paper from '@material-ui/core/Paper';
import {withStyles} from "@material-ui/core/styles/index";
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//icons
import WidgetsIcon from '@material-ui/icons/Widgets'
import CheckIcon from '@material-ui/icons/Check'
import PeopleIcon from '@material-ui/icons/People'
import PublishIcon from '@material-ui/icons/Publish'

class SurveyReview extends Component {
    render() {
        const {classes} = this.props
        return (
            <Paper>
                <Card>
                    <div id={'title'} style={{padding: '16px 10px'}}>
                        <Typography variant="headline">Live From Space</Typography>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image={'https://www.w3schools.com/css/img_5terre_wide.jpg'}
                    />
                    <div id={'description'} style={{padding: '10px'}}>
                        <Typography variant="subheading">
                            bla ladsa
                        </Typography>
                    </div>
                    <CardContent>
                        <Typography variant="title">
                            Information:
                        </Typography>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <WidgetsIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="Type of questions: Text"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <CheckIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="Number of questions: 12"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PeopleIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="Participants: 12/100"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PublishIcon/>
                                </ListItemIcon>
                                <ListItemText inset primary="Publish date: 01/01/2000"/>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Paper>
        );
    }
}

const styles = theme => ({
    media: {
        height: '200px',
        width: '100%'
    },
});

export default withStyles(styles)(SurveyReview);